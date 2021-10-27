import { useEffect } from 'react'
import { Layout, Page, Text, Code, Link } from '@vercel/edge-functions-ui'
import { FEATURE_FLAGS, track } from '@lib/posthog'

export default function Marketing() {
  useEffect(() => {
    track(FEATURE_FLAGS.NEW_MARKETING_PAGE, 'user', 'page_serve', null, {
      treatment: 'on',
    }).catch((error) => {
      console.error(
        'Request to Split blocked, probably because by an add blocker',
        error
      )
    })
  }, [])

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        Marketing Variant
      </Text>
      <Text className="text-lg mb-4">
        You're currently looking at the variant of the marketing page under{' '}
        <Code>pages/marketing/b.tsx</Code>
      </Text>
      <Link href="/">Go back to /</Link>
    </Page>
  )
}

Marketing.Layout = Layout
