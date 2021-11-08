import { NextResponse } from 'next/server'

export async function middleware(req) {
  // TODO: stop other pages being requested directly

  // Redirect paths that go directly to the variant
  console.log('>>>>>>', req.nextUrl.pathname)

  const res = NextResponse.next()
  //  .rewrite(
  //   newAboutPageFlagEnabled ? '/about/b' : '/about'
  // )

  return res
}