import { UserContextProvider } from '../lib/UserContext'
import { supabase } from '../utils/initSupabase'
import './../style.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MyApp({ Component, pageProps }) {
  
  const router = useRouter()

  useEffect(() => {
    // Init for auto capturing
    const posthog = initPostHog()

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
    <main>
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </UserContextProvider>
    </main>
  )
}
