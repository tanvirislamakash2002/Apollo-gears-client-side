"use client"

import Link from "next/link"
import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerAction } from "@/app/(commonRoute)/_action/auth"
import ActionButton from "../ActionButton"

export default function SignupForm() {
    const [state, formAction] = useActionState(registerAction, null)
    const router = useRouter()

    useEffect(() => {
        if (!state) return

        alert(state.message)

        if (state.success) {
            router.push("/login")
        }
    }, [state, router])

    return (
        <section className="w-full rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground">Start your journey</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Create an account</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Join Apollo Gears and make your next drive effortless.
                </p>
            </div>

            <form action={formAction} className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Alex Morgan"
                        required
                        className="h-11"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className="h-11"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="At least 6 characters"
                        minLength={6}
                        required
                        className="h-11"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Re-enter your password"
                        minLength={6}
                        required
                        className="h-11"
                    />
                </div>

                <ActionButton>Create my account</ActionButton>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-foreground underline-offset-4 hover:underline">
                    Sign in
                </Link>
            </p>
        </section>
    )
}