import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function LoginForm() {
    return (
        <section className="w-full rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="mb-8">
                <p className="text-sm font-medium text-muted-foreground">Member access</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">Sign in</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Enter your details to continue to your account.
                </p>
            </div>

            <form action="#" className="space-y-5">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email address
                    </label>
                    <input
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
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <Link href="#" className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        required
                        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                    />
                </div>

                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                    <input
                        type="checkbox"
                        name="remember"
                        className="size-4 rounded border-input accent-primary"
                    />
                    Remember me
                </label>

                <Button type="submit" size="lg" className="h-11 w-full">
                    Sign in to Apollo Gears
                </Button>
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