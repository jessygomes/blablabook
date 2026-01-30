import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth.config'

export async function middleware(request: NextRequest) {

    const session = await auth();

    if(request.nextUrl.pathname.startsWith('/administration') && session?.user?.roleId !== 1 ) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
  matcher: '/administration/:path*',
}