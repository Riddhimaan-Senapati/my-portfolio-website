'use client'

import { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react'
import { useMounted } from '@/hooks/use-mounted'

/**
 * Thin wrapper over the Web Speech API.
 *
 * Chrome, Edge, and Safari implement SpeechRecognition (Safari behind the
 * webkit prefix). Firefox ships it disabled behind an about:config flag, so
 * `supported` is false there and callers should hide the mic entirely rather
 * than offer a button that cannot work.
 */

type SpeechRecognitionAlternative = { transcript: string }
type SpeechRecognitionResult = { 0: SpeechRecognitionAlternative; isFinal: boolean; length: number }
type SpeechRecognitionEvent = {
  resultIndex: number
  results: { length: number; [index: number]: SpeechRecognitionResult }
}

type SpeechRecognitionInstance = {
  lang: string
  continuous: boolean
  interimResults: boolean
  start: () => void
  stop: () => void
  abort: () => void
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: { error: string }) => void) | null
  onend: (() => void) | null
}

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance

const getConstructor = (): SpeechRecognitionConstructor | null => {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: SpeechRecognitionConstructor
    webkitSpeechRecognition?: SpeechRecognitionConstructor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export type UseSpeechRecognition = {
  supported: boolean
  listening: boolean
  transcript: string
  error: string | null
  start: () => void
  stop: () => void
}

export const useSpeechRecognition = (
  onFinalTranscript?: (text: string) => void
): UseSpeechRecognition => {
  // Derived rather than set in an effect: the constructor check is browser-only,
  // so it has to wait for hydration, but it never needs to be state.
  const mounted = useMounted()
  const supported = mounted && getConstructor() !== null

  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState<string | null>(null)

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null)

  // Always calls the latest callback without making it an effect dependency,
  // so a new inline function on every render doesn't tear down the recogniser.
  const emitFinalTranscript = useEffectEvent((text: string) => {
    onFinalTranscript?.(text)
  })

  useEffect(() => {
    const Recognition = getConstructor()
    if (!Recognition) return

    const recognition = new Recognition()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = true

    recognition.onresult = (event) => {
      let interim = ''
      let final = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) final += result[0].transcript
        else interim += result[0].transcript
      }

      setTranscript(final || interim)
      if (final) emitFinalTranscript(final.trim())
    }

    recognition.onerror = (event) => {
      // Aborting on purpose and silent audio are not user-facing failures.
      if (event.error === 'aborted' || event.error === 'no-speech') return
      setError(
        event.error === 'not-allowed'
          ? 'Microphone access was denied.'
          : 'Speech recognition failed.'
      )
      setListening(false)
    }

    recognition.onend = () => setListening(false)
    recognitionRef.current = recognition

    return () => {
      recognition.onresult = null
      recognition.onerror = null
      recognition.onend = null
      recognition.abort()
      recognitionRef.current = null
    }
  }, [])

  const start = useCallback(() => {
    const recognition = recognitionRef.current
    if (!recognition) return
    setError(null)
    setTranscript('')
    try {
      recognition.start()
      setListening(true)
    } catch {
      // start() throws if it is already running; treat that as already listening.
      setListening(true)
    }
  }, [])

  const stop = useCallback(() => {
    recognitionRef.current?.stop()
    setListening(false)
  }, [])

  return { supported, listening, transcript, error, start, stop }
}
