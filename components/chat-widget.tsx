'use client'

import { useEffect, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { AnimatePresence, motion } from 'motion/react'
import { MessageSquare, X, Send, Mic, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSpeechRecognition } from '@/hooks/use-speech-recognition'
import { cn } from '@/lib/utils'

const SUGGESTIONS: { heading: string; questions: string[] }[] = [
  {
    heading: 'Background',
    questions: [
      'What is he working on at Graphite?',
      'Walk me through his experience.',
      'Where does he go to school?',
    ],
  },
  {
    heading: 'Depth',
    questions: [
      'What is RAG collapse?',
      'What has he built with AWS?',
      'Which projects should I look at?',
    ],
  },
]

const textOf = (message: { parts?: { type: string; text?: string }[] }) =>
  message.parts
    ?.filter((part) => part.type === 'text')
    .map((part) => part.text ?? '')
    .join('') ?? ''

const ChatWidget = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Groups this visit's turns in the transcript table. Regenerated on reload,
  // never persisted client-side, and carries nothing identifying.
  const [conversationId] = useState(() => crypto.randomUUID())

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { conversationId },
    }),
  })

  const busy = status === 'submitted' || status === 'streaming'

  const speech = useSpeechRecognition((text) => {
    setInput((current) => (current ? `${current} ${text}` : text))
    inputRef.current?.focus()
  })

  // Keep the newest message in view as tokens stream in.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, busy])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const submit = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || busy) return
    if (speech.listening) speech.stop()
    sendMessage({ text: trimmed })
    setInput('')
  }

  return (
    <>
      <Button
        type="button"
        size="icon"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-label={open ? 'Close the assistant' : 'Ask about Riddhimaan'}
        className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full shadow-lg"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="chat-panel"
            role="dialog"
            aria-label="Ask about Riddhimaan"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[min(32rem,calc(100vh-8rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <header className="border-b border-border px-4 py-3">
              <p className="font-semibold">Ask about Riddhimaan</p>
              <p className="text-xs text-muted-foreground">
                Answers come from his résumé, projects, and blog. Conversations are stored to
                improve it — don&apos;t share anything private.
              </p>
            </header>

            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <div className="space-y-4">
                  {SUGGESTIONS.map((group) => (
                    <div key={group.heading}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {group.heading}
                      </p>
                      <div className="space-y-1.5">
                        {group.questions.map((question) => (
                          <button
                            key={question}
                            type="button"
                            onClick={() => submit(question)}
                            className="w-full rounded-md bg-muted px-3 py-2 text-left text-sm transition-colors hover:bg-accent"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm',
                      message.role === 'user'
                        ? 'ml-auto bg-primary text-primary-foreground'
                        : 'bg-muted'
                    )}
                  >
                    {textOf(message)}
                  </div>
                ))
              )}

              {status === 'submitted' && (
                <p className="text-sm text-muted-foreground" role="status">
                  Thinking…
                </p>
              )}

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
              {speech.error && (
                <p className="text-sm text-destructive" role="alert">
                  {speech.error}
                </p>
              )}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                submit(input)
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              {speech.supported && (
                <Button
                  type="button"
                  size="icon"
                  variant={speech.listening ? 'default' : 'outline'}
                  onClick={() => (speech.listening ? speech.stop() : speech.start())}
                  aria-label={speech.listening ? 'Stop dictating' : 'Dictate a question'}
                  aria-pressed={speech.listening}
                  className="h-9 w-9 shrink-0"
                >
                  {speech.listening ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
              )}

              <input
                ref={inputRef}
                value={speech.listening && speech.transcript ? speech.transcript : input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={speech.listening ? 'Listening…' : 'Ask a question…'}
                aria-label="Your question"
                maxLength={1000}
                disabled={busy}
                className="h-9 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
              />

              <Button
                type="submit"
                size="icon"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="h-9 w-9 shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
