"use client"

import Link from "next/link"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState, useEffect } from "react"
import { loginAction } from "@/app/(commonRoute)/_action/auth"
import ActionButton from "../ActionButton"
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(loginAction, null)
    const route = useRouter()

    useEffect(() => {
        if (!state) return

        if (!state.success) {
            alert(state.message || "Login failed")
        }
        if (state.success) {
            alert(state.message || "Login Successful")
            route.push("/")
        }
    }, [state, route])
    return (
        <section className="w-full rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground">Member access</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Sign in</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Enter your details to continue to your account.
                </p>
            </div>

            <form action={formAction} className="space-y-5">
                <div className="space-y-2">

                    <Label htmlFor="email">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        required
                        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                    />
                </div>

                <Label className="text-muted-foreground">
                    <Checkbox
                        name="remember"
                    />
                    Remember me
                </Label>

                {/* <Button type="submit" size="lg" className="h-11 w-full">
                    Sign in to Apollo Gears
                </Button> */}
                <ActionButton>Sign in to Apollo Gears</ActionButton>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
                New to Apollo Gears?{" "}
                <Link href="/signup" className="font-semibold text-foreground underline-offset-4 hover:underline">
                    Create an account
                </Link>
            </p>
        </section>
    )
}