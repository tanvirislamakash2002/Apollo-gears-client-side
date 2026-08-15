import React from "react"

import BannerButton from "./BannerButton"
import MotionCar from "./MotionCar"

export default function Banner() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Build faster with Apollo Gears</h1>
        <p className="text-muted-foreground mx-auto max-w-2xl mb-8">
          A simple, composable UI toolkit and starter layout to get your app up
          and running quickly.
        </p>

        <BannerButton />
        <MotionCar />
      </div>
    </section>
  )
}
