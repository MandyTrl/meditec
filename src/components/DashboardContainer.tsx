"use client"
import React, { useContext, useState } from "react"
import { HospitalContext } from "@/utils/Context"
import { hospitalsName, topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { SelectInput } from "./UI/SelectInput"
import { LocalTime } from "./UI/LocalTime"

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
				<div className="px-3 md:px-0">
					<div className="flex items-end justify-between">
						<h2 className="my-1 md:text-4xl font-semibold">
							{hospital.length > 1 ? "Overview" : `${hospital[0].name}`}
						</h2>

						<p className="text-lg md:text-xl mt-8">
							Welcome on your dashboard,{" "}
							<span className="font-semibold">John Doe</span>
						</p>
					</div>

					<LocalTime />

					<div className="max-h-fit h-full p-4 md:p-6 mt-2 md:mt-4 mb-4 block bg-white/30 rounded-lg">
						<SelectInput
							labels={hospitalsName}
							title="Hospitals"
							onSelectChange={(selectedHospital) =>
								handleSelect(selectedHospital)
							}
							placeholder="Select an hospital"
						/>
					</div>
				</div>

				<TopHospitalsLayout />
			</div>
		</HospitalContext.Provider>
	)
}
