'use client'

import { Children } from 'react'
import { motion, type Variants } from 'motion/react'
import { cn } from '@/lib/utils'

export type PresetType = 'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide'

export type AnimatedGroupProps = {
  children: React.ReactNode
  className?: string
  variants?: { container?: Variants; item?: Variants }
  preset?: PresetType
  as?: keyof typeof motion
  asChild?: keyof typeof motion
  once?: boolean
  amount?: number
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.9 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: 'blur(4px)' },
    visible: { filter: 'blur(0px)' },
  },
  'blur-slide': {
    hidden: { filter: 'blur(4px)', y: 20 },
    visible: { filter: 'blur(0px)', y: 0 },
  },
}

const addDefaultVariants = (variants: Variants): Variants => ({
  hidden: { ...defaultItemVariants.hidden, ...variants.hidden },
  visible: { ...defaultItemVariants.visible, ...variants.visible },
})

export function AnimatedGroup({
  children,
  className,
  variants,
  preset,
  as = 'div',
  asChild = 'div',
  once = true,
  amount = 0.2,
}: AnimatedGroupProps) {
  const selectedVariants = preset ? addDefaultVariants(presetVariants[preset]) : defaultItemVariants
  const containerVariants = variants?.container || defaultContainerVariants
  const itemVariants = variants?.item || selectedVariants

  const MotionComponent = motion[as] as typeof motion.div
  const MotionChild = motion[asChild] as typeof motion.div

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      className={cn(className)}
    >
      {Children.map(children, (child, index) => (
        <MotionChild key={index} variants={itemVariants}>
          {child}
        </MotionChild>
      ))}
    </MotionComponent>
  )
}
