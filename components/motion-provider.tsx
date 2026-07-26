'use client'

import { MotionConfig } from 'motion/react'

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  // "user" makes every animation respect the OS-level prefers-reduced-motion setting.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export default MotionProvider
