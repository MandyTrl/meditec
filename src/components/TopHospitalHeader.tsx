"use client"
import React from "react"
import { Profil } from "./Profil"
import { LocalTime } from "./UI/LocalTime"
import { FiltersTab } from "./FiltersTab"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"

export const TopHospitalsHeader = () => {
	const { hasHospitalSelected, hospital } = useHospitalSelected()

	return (
		<div>
			<div className="flex flex-col-reverse md:flex-row flex-reverse items-end justify-between px-1 md:px-0">
				<div className="flex flex-col items-start">
					<p className="text-right md:text-xl mt-8">
						Welcome on your dashboard,
					</p>

					<h2 className="my-1 text-lg md:text-4xl font-semibold">
						{!hasHospitalSelected ? "Overview" : `${hospital[0].name}`}
					</h2>
				</div>

				<Profil />
			</div>

			<LocalTime />

			<FiltersTab />
		</div>
	)
}
