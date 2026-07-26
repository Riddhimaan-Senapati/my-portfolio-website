'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

/**
 * Returns false during SSR and the hydrating render, then true.
 *
 * Client-only values (such as the resolved theme) must not be read before hydration
 * finishes or the markup will not match. Using useSyncExternalStore rather than
 * setState-in-an-effect avoids the cascading render that react-hooks flags.
 */
export const useMounted = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
