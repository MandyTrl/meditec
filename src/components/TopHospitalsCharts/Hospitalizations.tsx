/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
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
			return 280
		} else {
			return 380
		}
	}

	return (
		<ChartContainer>
			<ChartHeader title="Hospitalisations" />

			<ResponsiveContainer height={handleChartHeight()}>
				<BarChart
					data={chartData}
					barGap={3}
					margin={{
						top: isMobile ? 20 : 12,
						right: isMobile ? 0 : 18,
						left: isMobile ? 0 : 18,
						bottom: 0,
					}}>
					<CartesianGrid stroke="#f5f5f5" />

					<XAxis
						dataKey="name"
						stroke="#2100AD"
						height={50}
						tick={(props) => <CustomAxisTick {...props} />}
						tickMargin={5}
						interval={0}
					/>

					{!isMobile && (
						<YAxis stroke="#2100AD" allowDataOverflow width={60} tickSize={6} />
					)}

					<Tooltip
						wrapperStyle={{
							width: 180,
							backgroundColor: "rgba(210, 229, 255, 0.5)",
						}}
					/>

					<Legend />

					<Bar
						dataKey="2023"
						fill="#009dff"
						shape={(props: any) => <CustomBar {...props} />}
					/>
					<Bar
						dataKey="2024"
						fill="#EF62FF"
						shape={(props: any) => <CustomBar {...props} />}
					/>
				</BarChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
