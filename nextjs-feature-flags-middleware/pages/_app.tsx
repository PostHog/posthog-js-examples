import type { AppProps } from 'next/app'
import type { LayoutProps } from '@vercel/edge-functions-ui/layout'
import { getLayout } from '@vercel/edge-functions-ui'
import '@vercel/edge-functions-ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component)

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
