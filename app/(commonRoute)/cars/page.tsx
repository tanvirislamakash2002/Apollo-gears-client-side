
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import TotalProduct from './TotalProduct'

export async function generateMetadata() {
  const data = await fetch("")
  const cars = await data.json()
  return {
    title: `Cars - ${cars?.data?.length || 0} cars available`,
    description: "Browse our collection of cars"
  }
}
export default async function page() {
  const data = await fetch("http://localhost:5000/api/v1/cars")
  const cars = await data.json()
  console.log(cars)
  return (
    <div className='p-4 border rounded'>
      <h1>Cars</h1>
      <ul>
        {cars?.data?.map((car: any) => (
          <div key={car.id}>
            <li>{car.make}{car.model}</li>
            <Button>
              <Link href={`/cars/${car?.id}`}>view Details</Link>
            </Button>
          </div>
        ))}
      </ul>
      <TotalProduct />
    </div>
  )
}
