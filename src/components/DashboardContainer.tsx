"use client"
import React, { useContext, useState } from "react"
import { HospitalContext } from "@/utils/Context"
import { hospitalsName, topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { SelectInput } from "./UI/SelectInput"

export const DashboardContainer = () => {
	const hospitalCtxt = useContext(HospitalContext)
	const { handleHospital } = hospitalCtxt
	const [hospital, setHospital] = useState<Hospital[]>(topHospitals)

	const handleSelect = (hospitalSelected: string) => {
		const hospitalFound = topHospitals.find(
			(el: Hospital) => el.name === hospitalSelected
		)
		setHospital(hospitalFound ? new Array(hospitalFound) : topHospitals)
	}

	return (
		<HospitalContext.Provider value={{ hospital, handleHospital }}>
			<div className="w-full h-full">
				<h2 className="text-xl md:text-2xl">
					Welcome on your <span className="font-semibold">Dashboard</span>
				</h2>

				<SelectInput
					labels={hospitalsName}
					onSelectChange={(selectedHospital) => handleSelect(selectedHospital)}
					placeholder="Select an hospital"
				/>

				<div className="w-full bg-white/50 p-2 md:p-5 rounded-xl shadow">
					<TopHospitalsLayout />
				</div>
			</div>
		</HospitalContext.Provider>
	)
}
