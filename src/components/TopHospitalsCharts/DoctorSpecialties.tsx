/* eslint-disable @typescript-eslint/no-explicit-any */
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
	ResponsiveContainer,
} from "recharts"
import { SelectInput } from "@components/UI/SelectInput"
import { getSpecialties, topHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { ChartHeader } from "../ChartUI/ChartHeader"
import { handleChartHeight, shadowTool } from "@utils/utils"
import stethoscopeIcon from "@assets/icons/stethoscope.svg"
import { CustomAxisTick } from "../ChartUI/CustomAxisTick"
import { CustomBar } from "../ChartUI/CustomBar"
import { CustomTextLabel } from "../ChartUI/CustomTextLabel"

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
		<ChartContainer>
			<ChartHeader
				title="Specialties"
				icon={stethoscopeIcon}
				description="Ratio between satisfaction rate and number of doctors per specialty"
			/>

			<SelectInput labels={labels} onSelectChange={handleSelectChange} />

			<ResponsiveContainer height={handleChartHeight(isMobile)}>
				<ComposedChart
					width={isMobile || hospitalSelected ? 320 : 900}
					height={isMobile ? 300 : 330}
					data={datasReformated(selectedLabel)}
					barGap={3}
					margin={{
						top: isMobile ? 22 : 12,
						right: 8,
						left: 8,
						bottom: 0,
					}}>
					<CartesianGrid vertical={false} stroke="#ebf5fb" />

					<XAxis
						dataKey="name"
						stroke="#1b4f72"
						height={50}
						tick={(props) => <CustomAxisTick {...props} />}
						tickMargin={5}
						interval={0}
					/>

					<Legend
						iconType="circle"
						iconSize={12}
						margin={{ top: 15, left: 0, right: 0, bottom: 0 }}
						wrapperStyle={{ paddingTop: "15px" }}
					/>

					{!hospitalSelected ? (
						<Area
							type="monotone"
							dataKey="satisfactionRate"
							fill="#FDE6FF"
							stroke="#EF62FF"
						/>
					) : (
						<Bar
							dataKey="satisfactionRate"
							fill="#EF62FF"
							shape={(props: any) => <CustomBar {...props} />}
							label={(props) => <CustomTextLabel {...props} />}
						/>
					)}

					<Bar
						dataKey="numberOfDoctors"
						fill="#1b4f72"
						barSize={10}
						shape={(props: any) => <CustomBar {...props} />}
						label={(props) => <CustomTextLabel {...props} />}
					/>

					<Tooltip
						cursor={{
							fill: "#ebf5fb",
							radius: 8,
							y: 10,
						}}
						contentStyle={{
							border: "none",
							padding: 20,
							borderRadius: 8,
							boxShadow: `${shadowTool}`,
							fontSize: 15,
						}}
						labelStyle={{ fontSize: 16 }}
						itemStyle={{ lineHeight: 1, fontWeight: 600 }}
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
