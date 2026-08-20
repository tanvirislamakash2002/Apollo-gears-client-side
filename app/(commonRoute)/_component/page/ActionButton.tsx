"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function ActionButton({
    children,
}: {
    children: React.ReactNode
}) {

    const { pending } = useFormStatus()
    return <Button type='submit' size="lg" className="h-11 w-full">{pending ? "loading..." : children}</Button>
}
