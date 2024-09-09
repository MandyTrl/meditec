import React from "react"
import { Intro } from "../TopHospitals/Intro"
import { Hospitalizations } from "../TopHospitals/Hospitalizations"

export const TopHospitalsLayout = () => {
	return (
		<section className="w-full flex gap-2">
			<Intro />
			<Hospitalizations />
		</section>
	)
}
