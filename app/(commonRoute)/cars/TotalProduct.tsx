import React from 'react'

export default async function TotalProduct() {
    const data = await fetch("http://localhost:5000/api/v1/cars")
    const cars = await data.json()
    return (
        <div>
            TotalProduct: {cars?.data?.length || 0}
        </div>
    )
}
