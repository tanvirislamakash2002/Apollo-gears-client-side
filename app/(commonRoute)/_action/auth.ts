"use server"

import { cookies } from "next/headers"

export async function loginAction(preSate: any, fromData: any) {
    try {
        const email = fromData.get("email")
        const password = fromData.get("password")

        if (!email || !password) {
            throw new Error("email and  password is required")
        }

        const response = await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            }),
            cache: "no-cache"
        })

        const result = await response.json()
        const { accessToken, refreshToken } = result.data
        const cookieOptions = await cookies()
        cookieOptions.set({
            name: "accessToken",
            value: accessToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none"
        })
        cookieOptions.set({
            name: "refreshToken",
            value: refreshToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none"
        })
        return {
            success: true,
            message: "Login Successful"
        }
    } catch (error) {
        console.log(error)
    }
}