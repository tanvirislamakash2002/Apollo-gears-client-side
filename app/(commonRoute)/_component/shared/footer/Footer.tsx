import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function Footer() {
	return (
		<footer className={cn("w-full bg-background border-t border-border text-sm")}>
			<div className="mx-auto max-w-7xl px-4 py-6 flex flex-col items-center justify-between gap-4 md:flex-row">
				<div className="flex items-center gap-3">
					<span className="text-lg font-semibold">Apollo Gears</span>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4">
					<Link href="/">Home</Link>
					<Link href="/dashboard">Dashboard</Link>
					<Link href="/about">About</Link>
				</div>

				<div className="text-muted-foreground">© {new Date().getFullYear()} Apollo Gears</div>
			</div>
		</footer>
	)
}

