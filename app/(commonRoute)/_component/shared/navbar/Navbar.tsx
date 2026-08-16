import React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
	return (
		<nav className={cn("w-full bg-background border-b border-border")}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/" className="text-lg font-semibold">Apollo Gears</Link>
					</div>

					<div className="hidden md:flex md:items-center md:space-x-6">
						<Link href="/">Home</Link>
						<Link href="/dashboard">Dashboard</Link>
						<Link href="/about">About</Link>
						<Link href="/cars">Cars</Link>
					</div>

					<div className="flex items-center gap-2">
						<Link href="/login">
							<Button variant="ghost" size="sm">Sign in</Button>
						</Link>
						<Link href="/signup">
							<Button size="sm">Sign up</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

