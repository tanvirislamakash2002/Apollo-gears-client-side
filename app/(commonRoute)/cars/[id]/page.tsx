import React from 'react'

export default async function page({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    return (
        <div>
            this is car details page of {id}
        </div>
    )
}
