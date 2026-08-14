"use client"

import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"

export default function BannerButton() {
  return (
    <div className="flex items-center justify-center gap-3">
      <Link href="/signup">
        <Button size="lg">Get started</Button>
      </Link>
      <Link href="/about">
        <Button variant="ghost" size="lg">Learn more</Button>
      </Link>
    </div>
  )
}
