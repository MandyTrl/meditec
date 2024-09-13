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
	const { hospital, hospitalSelected } = useHospitalSelected()
	const labels: string[] = getSpecialties(topHospitals)
	const [selectedLabel, setSelectedLabel] = useState<string>(labels[0])

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
		<div className="flex-1 w-full md:w-fit bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold text-center md:text-left mt-2 mb-7 md:mb-10">
				Spécialités
			</h4>

			<SelectInput labels={labels} onSelectChange={handleSelectChange} />

			<ComposedChart
				width={isMobile || hospitalSelected ? 320 : 900}
				height={isMobile ? 300 : 330}
				data={datasReformated(selectedLabel)}
				barGap={3}
				margin={{
					top: isMobile ? 35 : 12,
					right: isMobile ? 30 : 18,
					left: isMobile ? 0 : 12,
					bottom: 0,
				}}>
				<CartesianGrid stroke="#f5f5f5" />

				<XAxis
					dataKey="name"
					stroke="#2100AD"
					minTickGap={isMobile ? 2 : 5}
					label={{ position: "insideBottomRight", offset: 0 }}
					className="text-sm text-wrap"
				/>
				{!isMobile && <YAxis stroke="#2100AD" />}

				<Tooltip />
				<Legend />

				{!hospitalSelected ? (
					<Area
						type="monotone"
						dataKey="satisfactionRate"
						fill="#FDE6FF"
						stroke="#EF62FF"
					/>
				) : (
					<Bar dataKey="satisfactionRate" fill="#EF62FF" barSize={35} />
				)}

				<Bar dataKey="numberOfDoctors" fill="#64BEFF" barSize={60} />
			</ComposedChart>
		</div>
	)
}
