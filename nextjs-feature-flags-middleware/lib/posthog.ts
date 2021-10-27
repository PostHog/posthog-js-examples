import { useEffect } from 'react'
import { useRouter } from 'next/router'
import posthog, { PostHog } from 'posthog-js'

let POSTHOG_INSTANCE: PostHog

export const usePostHog = (apiKey: string, config?: posthog.Config, name?: string): void => {
  const router = useRouter()

  if(config.loaded) {
    // override the existing loaded function so we store get the PostHog instance
    const oldLoaded = config.loaded
    config.loaded = (posthog: PostHog) => {
      setPostHogInstance(posthog)
      oldLoaded(POSTHOG_INSTANCE)
    }
  }
  else {
    config.loaded = setPostHogInstance
  }

  useEffect((): () => void => {
    if(typeof window === undefined ) return

    posthog.init(apiKey, config, name)

    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

const setPostHogInstance = (posthog: PostHog) => {
  POSTHOG_INSTANCE = posthog
}

export const getPostHogInstance = (): PostHog => {
  return POSTHOG_INSTANCE
}
