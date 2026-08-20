import jwt, { JwtPayload } from "jsonwebtoken";
import { NextResponse, NextRequest } from 'next/server'

const publicRoutes = ['/', '/about', '/contact', '/login', '/signup']
export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const accessToken = request.cookies.get('accessToken')?.value;
    let userRole = null;
    if (accessToken) {
        try {
            const decode = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload

            userRole = decode.role
        } catch (error) {
            const res = NextResponse.redirect(new URL("/login", request.url))
            res.cookies.delete("accessToken")
            res.cookies.delete("refreshToken")
            return res
        }
    }

    return NextResponse.next()
}
