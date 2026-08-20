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

        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Login failed"
            }
        }
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

export async function registerAction(preState: any, formData: FormData) {
    try {
        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const confirmPassword = formData.get("confirmPassword")

        if (!email || !password) {
            return {
                success: false,
                message: "Email and password are required"
            }
        }

        if (password !== confirmPassword) {
            return {
                success: false,
                message: "Passwords do not match"
            }
        }

        const response = await fetch("http://localhost:5000/api/v1/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
            cache: "no-cache"
        })

        const result = await response.json()

        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Registration failed"
            }
        }

        return {
            success: true,
            message: result.message || "Registration successful"
        }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            message: "Unable to connect to the server"
        }
    }
}