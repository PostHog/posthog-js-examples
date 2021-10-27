import { useEffect } from 'react'
import { Layout, Page, Text, Link } from '@vercel/edge-functions-ui'
import { FEATURE_FLAGS, track } from '@lib/posthog'

export default function About() {
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
        About page
      </Text>
      <Text className="text-lg mb-4">This is the original about page</Text>
      <Text className="mb-4">
        You're currently on <b>/about</b>
      </Text>
      <Link href="/">Go back to /</Link>
    </Page>
  )
}

About.Layout = Layout
