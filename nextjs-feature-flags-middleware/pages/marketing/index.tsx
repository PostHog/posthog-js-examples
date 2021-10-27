import { Layout, Page, Text, Link } from '@vercel/edge-functions-ui'

export default function Marketing() {
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
