
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const data = await fetch("http://localhost:5000/api/v1/cars")
  const cars = await data.json()
  console.log(cars)
  return (
    <div>
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
    </div>
  )
}
