'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Scrolls to the element named by the URL hash after navigation.
 *
 * The homepage sections mount inside animated wrappers that start offset and blurred, so
 * the browser's own anchor scroll runs against a layout that has not settled and ends up
 * doing nothing. This re-runs the scroll once the route has committed.
 */
const HashScroll = () => {
  const pathname = usePathname()

  useEffect(() => {
    const { hash } = window.location
    if (!hash || hash.length < 2) return

    let frame = 0
    const scroll = () => {
      const target = document.querySelector(hash)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }

    // Two frames: one for the route commit, one for the animated wrappers to lay out.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(scroll)
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

export default HashScroll
