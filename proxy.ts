import { NextResponse, NextRequest } from 'next/server'

const publicRoutes = ['/', '/about', '/contact', '/login', '/signup']
export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const accessToken = request.cookies.get('accessToken')?.value;
    console.log(accessToken)

    return NextResponse.next()
}
