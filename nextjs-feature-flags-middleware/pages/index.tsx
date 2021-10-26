import Cookies from 'js-cookie'
import {
  Layout,
  Page,
  Text,
  List,
  Link,
  Button,
} from '@vercel/edge-functions-ui'
import { SPLITS } from '@lib/split'

export default function Index() {
  const removeCookie = (name: string) => {
    Cookies.remove(name)
    window.location.reload()
  }

  return (
    <Page>
      <Text variant="h2" className="mb-6">
        AB testing with Split
      </Text>
      <Text className="mb-4">
        The about and marketing pages will each render a different version with
        a 50% chance:
      </Text>
      <List className="mb-4">
        <li>
          <Link href="/about">/about</Link>
        </li>
        <li>
          <Link href="/marketing">/marketing</Link>
        </li>
      </List>
      <Text className="text-lg mb-4">
        Click the buttons below if you want to change the current variant (each
        variant has a 50% chance)
      </Text>
      <div>
        <Button
          variant="secondary"
          className="mr-2.5"
          onClick={() => removeCookie(`flag-${SPLITS.NEW_ABOUT_PAGE}`)}
        >
          Remove /about cookie & reload
        </Button>
        <Button
          variant="secondary"
          onClick={() => removeCookie(`flag-${SPLITS.NEW_MARKETING_PAGE}`)}
        >
          Remove /marketing cookie & reload
        </Button>
      </div>
    </Page>
  )
}

Index.Layout = Layout
