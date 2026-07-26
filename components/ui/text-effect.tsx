'use client'

import { AnimatePresence, motion, type Transition, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

export type PresetType = 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide'
export type PerType = 'word' | 'char' | 'line'

export type TextEffectProps = {
  children: string
  per?: PerType
  as?: keyof typeof motion
  variants?: { container?: Variants; item?: Variants }
  className?: string
  preset?: PresetType
  delay?: number
  speedReveal?: number
  speedSegment?: number
  trigger?: boolean
  segmentWrapperClassName?: string
}

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const presetVariants: Record<PresetType, { container: Variants; item: Variants }> = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: 'blur(12px)' },
      visible: { opacity: 1, filter: 'blur(0px)' },
      exit: { opacity: 0, filter: 'blur(12px)' },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
}

const splitText = (text: string, per: PerType) => {
  if (per === 'line') return text.split('\n')
  return text.split(/(\s+)/)
}

const withTiming = (variants: Variants, transition: Transition): Variants => ({
  ...variants,
  visible: {
    ...(variants.visible as object),
    transition,
  },
})

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset = 'fade',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  segmentWrapperClassName,
}: TextEffectProps) {
  const segments = splitText(children, per)
  const selected = presetVariants[preset]

  const stagger = defaultStaggerTimes[per] / speedReveal
  const duration = 0.3 / speedSegment

  const containerVariants = withTiming(variants?.container || selected.container, {
    staggerChildren: stagger,
    delayChildren: delay,
  })
  const itemVariants = withTiming(variants?.item || selected.item, { duration })

  const MotionComponent = motion[as] as typeof motion.div
  const MotionSpan = motion.span

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionComponent
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className={className}
        >
          {segments.map((segment, index) => {
            const isWhitespace = /^\s+$/.test(segment)

            if (per === 'char' && !isWhitespace) {
              return (
                <span key={`${segment}-${index}`} className="inline-block whitespace-pre">
                  {segment.split('').map((char, charIndex) => (
                    <MotionSpan
                      key={`${char}-${charIndex}`}
                      variants={itemVariants}
                      className="inline-block whitespace-pre"
                    >
                      {char}
                    </MotionSpan>
                  ))}
                </span>
              )
            }

            return (
              <MotionSpan
                key={`${segment}-${index}`}
                variants={itemVariants}
                className={cn(
                  per === 'line' ? 'block' : 'inline-block whitespace-pre',
                  segmentWrapperClassName
                )}
              >
                {segment}
              </MotionSpan>
            )
          })}
        </MotionComponent>
      )}
    </AnimatePresence>
  )
}
