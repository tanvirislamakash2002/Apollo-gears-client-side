"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

export default function MotionCar() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		// trigger the transition on the next frame
		const id = requestAnimationFrame(() => setMounted(true))
		return () => cancelAnimationFrame(id)
	}, [])

	const baseStyle: React.CSSProperties = {
		transform: mounted ? "translate(0, 0)" : "translate(160px, -40px)",
		opacity: mounted ? 1 : 0,
		transition: "transform 900ms cubic-bezier(.2,.8,.2,1), opacity 900ms ease",
	}

	return (
		<div className="mt-8 flex justify-center pointer-events-none">
			<div style={baseStyle}>
				<Image src="/car.avif" alt="Car" width={640} height={360} className="w-80 max-w-full" />
			</div>
		</div>
	)
}

