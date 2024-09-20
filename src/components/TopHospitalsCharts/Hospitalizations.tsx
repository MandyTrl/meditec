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
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { CustomAxisTick } from "@components/ChartUI/CustomAxisTick"
import { CustomBar } from "@components/ChartUI/CustomBar"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { CustomTextLabel } from "../ChartUI/CustomTextLabel"
import hospitalIcon from "@assets/hospital.svg"

type ChartData = {
	name: string
	2023: number
	2024: number
}

export const Hospitalizations = () => {
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
				hospitalData.yearlyHospitalizations[el.year] += el.value
			})

			return hospitalData
		})

		const data: ChartData[] = hospitalizationsPerYear.map((hospital) => {
			return {
				name: hospital.name,
				"2023": hospital.yearlyHospitalizations["2023"],
				"2024": hospital.yearlyHospitalizations["2024"],
			}
		})

		setChartData(data)
	}, [hospital])

	// const handleChartWidth = () => {
	// 	if (isMobile) {
	// 		return 300
	// 	} else {
	// 		if (hospitalSelected) {
	// 			return 375
	// 		}
	// 		return 780
	// 	}
	// }

	const handleChartHeight = () => {
		if (isMobile) {
			return 260
		} else {
			return 320
		}
	}

	return (
		<ChartContainer>
			<ChartHeader
				title="Hospitalisations"
				icon={hospitalIcon}
				description="Hospitalisations totales par an"
			/>

			<ResponsiveContainer height={handleChartHeight()}>
				<BarChart
					data={chartData}
					barGap={3}
					margin={{
						top: isMobile ? 14 : 12,
						right: 8,
						left: 8,
						bottom: 0,
					}}>
					<CartesianGrid strokeDasharray={1} stroke="#ebf5fb" />

					<XAxis
						dataKey="name"
						stroke="#1b4f72"
						height={50}
						tick={(props) => <CustomAxisTick {...props} />}
						tickMargin={5}
						interval={0}
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
							boxShadow:
								"3.4px 3.4px 2.7px rgba(0, 0, 0, 0.022), 8.7px 8.7px 6.9px rgba(0, 0, 0, 0.031),17.7px 17.7px 14.2px rgba(0, 0, 0, 0.039),36.5px 36.5px 29.2px rgba(0, 0, 0, 0.048),100px 100px 80px rgba(0, 0, 0, 0.07)",
							fontSize: 15,
						}}
						labelStyle={{ fontSize: 16 }}
						itemStyle={{ lineHeight: 1, fontWeight: 600 }}
					/>

					<Legend iconType="circle" wrapperStyle={{ paddingTop: "15px" }} />

					<Bar
						dataKey="2023"
						fill="#aed6f1"
						shape={(props: any) => <CustomBar {...props} />}
						label={(props) => <CustomTextLabel {...props} />}
					/>
					<Bar
						dataKey="2024"
						fill="#1b4f72"
						// fill="#0EA5E9"
						shape={(props: any) => <CustomBar {...props} />}
						label={(props) => <CustomTextLabel {...props} />}
					/>
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
