'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  type Transition,
  type UseInViewOptions,
  type Variant,
} from 'motion/react'

export type InViewProps = {
  children: React.ReactNode
  variants?: { hidden: Variant; visible: Variant }
  transition?: Transition
  viewOptions?: UseInViewOptions
  as?: keyof typeof motion
  once?: boolean
  className?: string
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once = false,
  className,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { ...viewOptions, once })

  const MotionComponent = motion[as] as typeof motion.div

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
