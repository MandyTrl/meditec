"use client"
import React, { useState } from "react"
import { HospitalContext } from "@/utils/Context"
import { Hospital, topHospitals } from "@/utils/data/hospitals"
import { ListTabs } from "@components/UI/ListTabs"
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
			<div className="w-full h-full mt-5 md:mt-20">
				<ListTabs />

				<div className="w-full bg-white/20 p-2 md:p-5 md:rounded-tr-xl rounded-b-xl md:rounded-tl-none">
					<TopHospitalsLayout />
				</div>
			</div>
		</HospitalContext.Provider>
	)
}
