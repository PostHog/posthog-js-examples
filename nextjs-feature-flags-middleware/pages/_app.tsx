import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/edge-functions-ui/layout'
import { getLayout } from '@vercel/edge-functions-ui'
import '@vercel/edge-functions-ui/globals.css'

import Cookies from 'js-cookie'
import { usePostHog } from '@lib/posthog'
import { PostHog } from 'posthog-js'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

  console.log('calling usePostHog')

  usePostHog(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    loaded: (posthog: PostHog) => {
      // Set the distinct_id being used by PostHog on the client
      // so we can also use on the server.
      Cookies.set('distinct_id', posthog.get_distinct_id())
    }
  })

  return (
    <Layout
      title="AB testing with PostHog"
      path="nextjs-feature-flags-middleware"
      deployButton={{
        repositoryUrl: 'https://github.com/posthog/posthog/posthog-js-examples',
        env: [
          'NEXT_PUBLIC_POSTHOG_PROJECT_API_KEY',
        ],
      }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}

