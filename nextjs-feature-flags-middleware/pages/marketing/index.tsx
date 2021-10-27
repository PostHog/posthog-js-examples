import { useEffect } from 'react'
import { Layout, Page, Text, Link } from '@vercel/edge-functions-ui'
import { FEATURE_FLAGS, track } from '@lib/posthog'

export default function Marketing() {
  useEffect(() => {
    track(FEATURE_FLAGS.NEW_ABOUT_PAGE, 'user', 'page_serve', null, {
      treatment: 'off',
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
        Marketing page
      </Text>
      <Text className="text-lg mb-4">This is the original marketing page</Text>
      <Text className="mb-4">
        You're currently on <b>/marketing</b>
      </Text>
      <Link href="/">Go back to /</Link>
    </Page>
  )
}

Marketing.Layout = Layout
