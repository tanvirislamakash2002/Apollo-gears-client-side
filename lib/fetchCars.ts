export async function fetchCars() {
    console.time("Fetch Cars Time")

    const start = performance.now()

    const res = await fetch("http://localhost:5000/api/v1/cars")
    const data = await res.json()

    const end = performance.now()
    console.timeEnd("Fetch Cars Time")
    console.log(`Fetch too ${(end - start).toFixed(2)} ms`)

    return data
}