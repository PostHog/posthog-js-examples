import { NextRequest, NextResponse } from 'next/server'
import { isFeatureFlagEnabled } from '@lib/posthog-node'
import { FEATURE_FLAGS } from '@lib/posthog'

export function middleware(req: NextRequest) {
  // Redirect paths that go directly to the variant
  if (req.nextUrl.pathname != '/about') {
    return NextResponse.redirect('/about')
  }

  const flagName = `flag-${FEATURE_FLAGS.NEW_ABOUT_PAGE}`
  const cookie =
    req.cookies[flagName] ||
    (isFeatureFlagEnabled('anonymous', FEATURE_FLAGS.NEW_ABOUT_PAGE) ? '1' : '0')
  const res = NextResponse.rewrite(cookie === '1' ? '/about/b' : '/about')

  // Add the cookie if it's not there
  if (!req.cookies[flagName]) {
    res.cookie(flagName, cookie)
  }

  return res
}
