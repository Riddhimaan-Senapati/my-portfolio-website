'use client'

import { InView } from '@/components/ui/in-view'

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <InView
      once
      viewOptions={{ margin: '0px 0px -100px 0px' }}
      variants={{
        hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </InView>
  )
}

export default AnimatedSection
