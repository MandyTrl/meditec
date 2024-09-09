"use client"
import React, { useState } from "react"
import { HospitalContext } from "@/utils/Context"
import { Hospital, topHospitals } from "@/utils/Datas/hospitals"
import { ListTabs } from "@components/UI/ListTabs"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { Hospitalizations } from "./TopHospitals/Hospitalizations"

export const DashboardContainer = () => {
	const [hospital, setHospital] = useState<Hospital | Hospital[]>(topHospitals)

	const handleHospital = (hospitalSelected: string) => {
		const hospitalFound = topHospitals.find(
			(el: Hospital) => el.name === hospitalSelected
		)
		setHospital(hospitalFound || topHospitals)
	}

	return (
		<HospitalContext.Provider value={{ hospital, handleHospital }}>
			<div className="w-full h-full mt-5 md:mt-20">
				<ListTabs />

				<div className="flex flex-col md:flex-row items-start bg-white/20 p-2 md:p-5 rounded-xl md:rounded-tl-none">
					<TopHospitalsLayout />
					<Hospitalizations />
				</div>
			</div>
		</HospitalContext.Provider>
	)
}
