import { UserContextProvider } from '../lib/UserContext'
import { supabase } from '../utils/initSupabase'
import './../style.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PostHogProvider } from "posthog-js/react";
import { initPostHog } from '../utils/initPostHog'

export default function MyApp({ Component, pageProps }) {

  const posthog = initPostHog()

  const router = useRouter()

  useEffect(() => {

    const handleRouteChange = () => {
      if(typeof window !== 'undefined') {
        posthog.capture('$pageview')
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    };
  }, [router.events])
  
  return (
    <div className="container">
      <PostHogProvider client={posthog}>
        <UserContextProvider supabaseClient={supabase}>
          <Component {...pageProps} />
        </UserContextProvider>
      </PostHogProvider>
    </div>
  )
}
