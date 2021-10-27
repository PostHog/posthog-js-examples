import { NextRequest, NextResponse } from 'next/server'
import { isFeatureFlagEnabled } from '@lib/posthog-node'
import { FEATURE_FLAGS } from '@lib/posthog'

export async function middleware(req: NextRequest) {
  // Redirect paths that go directly to the variant
  if (req.nextUrl.pathname != '/marketing') {
    return NextResponse.redirect('/marketing')
  }

  const flagName = `flag-${FEATURE_FLAGS.NEW_MARKETING_PAGE}`
  const cookie =
    req.cookies[flagName] ||
    (await isFeatureFlagEnabled(Math.random().toString(), FEATURE_FLAGS.NEW_MARKETING_PAGE)? '1' : '0')

  const res = NextResponse.rewrite(
    cookie === '1' ? '/marketing/b' : '/marketing'
  )

  // Add the cookie if it's not there
  if (!req.cookies[flagName]) {
    res.cookie(flagName, cookie)
  }

  return res
}
