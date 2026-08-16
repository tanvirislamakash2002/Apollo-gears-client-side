
import React from "react"

type DashboardLayoutProps = {
    children: React.ReactNode
    admin?: React.ReactNode
    user?: React.ReactNode
    driver?: React.ReactNode
}

export default function DashboardLayout({ children, admin, user, driver }: DashboardLayoutProps) {
    const role = "admin" as "admin"|"driver"|"user"
    return (
        <div>
            {role === "admin" && admin}
            {role === "driver" && driver}
            {role === "user" && user}
        </div>
    )
}
