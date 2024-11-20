"use client"
import React, { useContext, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { HospitalContext } from "@/utils/Context"
import { hospitalsName, topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { SelectInput } from "./UI/SelectInput"
import filterIcon from "@assets/icons/filters.svg"

export const DashboardContainer = () => {
	const hospitalCtxt = useContext(HospitalContext)
	const { handleHospital } = hospitalCtxt
	const [hospital, setHospital] = useState<Hospital[]>(topHospitals)
	const [isOpen, setIsOpen] = useState<boolean>(false)

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
					<h2 className="text-xl md:text-2xl mt-8">
						Welcome on your <span className="font-semibold">Dashboard</span>
					</h2>

					<div className="flex">
						{hospital.length > 1 ? (
							<p className="my-1 md:text-3xl">
								You are on the{" "}
								<span className="font-semibold pb-[1px] border-b-2 border-b-tertiary">
									overview
								</span>
							</p>
						) : (
							<p className="my-1 md:text-3xl">
								You are on the{" "}
								<span className="font-semibold pb-[1px] border-b-2 border-b-tertiary">
									{hospital[0].name}
								</span>{" "}
								view
							</p>
						)}
					</div>

					<button
						className="flex items-center self-end md:mt-8 ml-2 hover:opacity-70 transition-all ease-in-out duration-150"
						onClick={() => setIsOpen((PrevState) => !PrevState)}>
						<Image alt="" src={filterIcon} className="w-4 mr-2" /> Filters
					</button>

					<div
						className={clsx(
							isOpen ? "max-h-fit p-4 md:p-6 block" : "max-h-0 overflow-hidden",
							"transition-all ease-in-out duration-300 mt-2 mb-4"
						)}>
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
