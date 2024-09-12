"use client"
import React, { useState } from "react"
import {
	ComposedChart,
	Area,
	Bar,
	CartesianGrid,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"
import { SelectInput } from "@components/UI/SelectInput"
import { getSpecialties, topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { useBreakpoint } from "@/utils/hooks/useBP"

type DatasDoctorSpecialties = {
	name: string
	numberOfDoctors: number
	satisfactionRate: number
}

export const DoctorSpecialties = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"
	const { hospital } = useHospitalSelected()
	const labels: string[] = getSpecialties(topHospitals)
	const [selectedLabel, setSelectedLabel] = useState<string>("")

	const handleSelectChange = (value: string) => {
		setSelectedLabel(value)
	}

	const datasReformated = (
		specialtySelected: string
	): DatasDoctorSpecialties[] => {
		return hospital.map((hospital: Hospital) => {
			const specialty = hospital.doctorSpecialties.find(
				(specialty) => specialty.specialty === specialtySelected
			)

			return {
				name: hospital.name,
				numberOfDoctors: specialty?.numberOfDoctors ?? 0,
				satisfactionRate: specialty?.satisfactionRate ?? 0,
			}
		})
	}

	return (
		<div className="h-fit w-full md:w-fit bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold text-center md:text-left mt-2 mb-7 md:mb-10">
				Spécialités
			</h4>

			<SelectInput labels={labels} onSelectChange={handleSelectChange} />

			<ComposedChart
				width={900}
				height={400}
				data={datasReformated(selectedLabel)}
				margin={{
					top: isMobile ? 15 : 32,
					right: isMobile ? 20 : 12,
					left: isMobile ? 20 : 12,
					bottom: isMobile ? 35 : 12,
				}}>
				<CartesianGrid stroke="#f5f5f5" />

				<XAxis dataKey="name" stroke="#2100AD" />
				<YAxis stroke="#2100AD" />

				<Tooltip />
				<Legend
					width={400}
					wrapperStyle={{
						bottom: isMobile ? 40 : 10,
						right: isMobile ? 0 : 220,
						lineHeight: "50px",
					}}
				/>
				<Area
					type="monotone"
					dataKey="satisfactionRate"
					fill="#FDE6FF"
					stroke="#EF62FF"
				/>

				<Bar dataKey="numberOfDoctors" barSize={25} fill="#64BEFF" />
			</ComposedChart>
		</div>
	)
}
