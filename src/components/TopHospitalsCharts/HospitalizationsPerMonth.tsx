/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	Legend,
	ResponsiveContainer,
} from "recharts"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { CustomBar } from "@components/ChartUI/CustomBar"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { CustomAxisTick } from "@components/ChartUI/CustomAxisTick"
import { CustomTextLabel } from "../ChartUI/CustomTextLabel"
import { handleChartHeight, shadowTool } from "@/utils/utils"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import hospitalIcon from "@assets/icons/hospital.svg"

type ChartData = {
	name: string
	2023: number
	2024: number
}

export const HospitalizationsPerMonth = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"

	const { hospital } = useHospitalSelected()

	const [chartData, setChartData] = useState<ChartData[] | []>([])

	useEffect(() => {
		const hospitalizationsPerYear = hospital.map((el: Hospital) => {
			const hospitalData: {
				name: string
				yearlyHospitalizations: { [year: number]: number }
			} = {
				name: el.name,
				yearlyHospitalizations: [],
			}

			//calcul de la somme des hospitalisations par année et par hôpital
			el.monthlyHospitalizations.forEach((el) => {
				if (!hospitalData.yearlyHospitalizations[el.year]) {
					hospitalData.yearlyHospitalizations[el.year] = 0
				}
				hospitalData.yearlyHospitalizations[el.year] += el.hospitalizations
			})

			return hospitalData
		})

		const data: ChartData[] = hospitalizationsPerYear.map((hospital) => {
			return {
				name: hospital.name,
				"2022": hospital.yearlyHospitalizations["2022"],
				"2023": hospital.yearlyHospitalizations["2023"],
				"2024": hospital.yearlyHospitalizations["2024"],
			}
		})

		setChartData(data)
	}, [hospital])

	return (
		<ChartContainer>
			<ChartHeader
				title="Hospitalizations"
				icon={hospitalIcon}
				description="Total hospitalizations per year"
			/>

			<ResponsiveContainer width="100%" height={handleChartHeight(isMobile)}>
				<BarChart
					data={chartData}
					barGap={3}
					margin={{
						top: isMobile ? 14 : 12,
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
						wrapperStyle={{ paddingTop: "15px" }}
					/>

					<Bar
						dataKey="2022"
						fill="#aed6f1"
						shape={(props: any) => <CustomBar {...props} />}
						// label={(props) => <CustomTextLabel {...props} />}
					/>

					<Bar
						dataKey="2023"
						fill="#67a8d3"
						shape={(props: any) => <CustomBar {...props} />}
					/>

					<Bar
						dataKey="2024"
						fill="#1b4f72"
						// fill="#0EA5E9"
						shape={(props: any) => <CustomBar {...props} />}
					/>

					<Tooltip
						cursor={{
							fill: "#ebf5fb",
							radius: 8,
							y: 10,
							opacity: 0.5,
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
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
