
import React from "react"

type DashboardLayoutProps = {
    children: React.ReactNode
    admin?: React.ReactNode
    user?: React.ReactNode
    driver?: React.ReactNode
}

export default function DashboardLayout({ children, admin, user, driver }: DashboardLayoutProps) {
    const role = "admin"
    return (
        <div>
            {role === "admin" && admin}
            {role === "driver" && driver}
            {role === "user" && user}
        </div>
    )
}
