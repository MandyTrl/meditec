"use client"
import React, { useState } from "react"
import { HospitalContext } from "@/utils/Context"
import { topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"

export const DashboardContainer = () => {
	const [hospital, setHospital] = useState<Hospital[]>(topHospitals)

	const handleHospital = (hospitalSelected: string) => {
		const hospitalFound = topHospitals.find(
			(el: Hospital) => el.name === hospitalSelected
		)
		setHospital(hospitalFound ? new Array(hospitalFound) : topHospitals)
	}

	return (
		<HospitalContext.Provider value={{ hospital, handleHospital }}>
			<div className="w-full h-full">
				<div className="w-full bg-white/20 p-2 md:p-5 rounded-xl shadow">
					<TopHospitalsLayout />
				</div>
			</div>
		</HospitalContext.Provider>
	)
}
