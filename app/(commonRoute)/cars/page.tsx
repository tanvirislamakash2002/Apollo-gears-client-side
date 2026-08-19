import { fetchCars } from "@/lib/fetchCars";

export async function generateMetadata() {
  const cars = await fetchCars()

  return {
    title: `Cars - ${cars?.data?.length || 0} cars available`
  }
}

export default async function Page() {
  const cars = await fetchCars()

  return (
    <div>
      <h1>Cars</h1>
      {cars?.data?.map((car: any) => (
        <div key={car.id}>{car.make}</div>
      ))}
    </div>
  )
}