import React from 'react'

export default async function page({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const data = await fetch(`http://localhost:5000/api/v1/cars/${id}`)
    const car = await data.json()
    return (
        <div>
            this is car details page of {car.data.make} {car.data.model}
        </div>
    )
}
