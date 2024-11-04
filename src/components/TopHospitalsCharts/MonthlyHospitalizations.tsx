import React, { useEffect, useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { CustomAxisTick } from "../ChartUI/CustomAxisTick"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { handleChartHeight, shadowTool } from "@/utils/utils"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import patientsIcon from "@assets/icons/patients.svg"

type MonthlyHospitalizationsProps = {
	datas: Hospital[]
	hasHospitalSelected: boolean
	isMobile: boolean
}

type ChartData = {
	month: string
	year: number
	hospitalizations: number
}

export const MonthlyHospitalizations = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: MonthlyHospitalizationsProps) => {
	const { hospital } = useHospitalSelected()

	const [chartData, setChartData] = useState<ChartData[] | []>([])

	useEffect(() => {
		if (!datas) {
			console.log("no datas for Monthly Hospitalizations available")
			return
		}

		if (!hasHospitalSelected) {
			const aggregateMonthlyHospitalizations = (
				datas: Hospital[]
			): ChartData[] => {
				const aggregatedData: { [key: string]: number } = {}

				datas.forEach((hospital: Hospital) => {
					hospital.monthlyHospitalizations.forEach(
						({ month, year, hospitalizations }) => {
							const key = `${month}-${year}`
							if (!aggregatedData[key]) {
								aggregatedData[key] = hospitalizations
							} else {
								aggregatedData[key] += hospitalizations
							}
						}
					)
				})

				return Object.keys(aggregatedData).map((key) => {
					const [month, year] = key.split("-")
					return {
						month,
						year: parseInt(year),
						hospitalizations: aggregatedData[key],
					}
				})
			}

			const aggregatedData = aggregateMonthlyHospitalizations(datas)
			const sum2024 = aggregatedData.filter((el: ChartData) => {
				return el.year === 2024
			})

			setChartData(sum2024)
		}
	}, [datas, hasHospitalSelected, hospital])

	return (
		<ChartContainer>
			<ChartHeader
				title="Monthly hospitalizations"
				icon={patientsIcon}
				description="Number of hospitalizations per month"
			/>

			<ResponsiveContainer width="100%" height={handleChartHeight(isMobile)}>
				<AreaChart
					data={chartData}
					barGap={3}
					margin={{
						top: isMobile ? 14 : 12,
						right: isMobile ? 8 : 30,
						left: isMobile ? 8 : 30,
						bottom: 0,
					}}>
					<XAxis
						dataKey="month"
						stroke="#1b4f72"
						height={50}
						tick={(props) => <CustomAxisTick {...props} />}
						tickMargin={20}
						interval={0}
					/>

					{/* 
					<Legend
						iconType="circle"
						iconSize={12}
						wrapperStyle={{ paddingTop: "15px" }}
					/> */}

					{/* <Line dataKey="2022" stroke="#aed6f1" />

					<Line dataKey="2023" stroke="#67a8d3" /> */}

					<Area
						dataKey="hospitalizations"
						stroke="#1b4f72"
						fill="#c4deef"
						type={"monotone"}
						dot={false}
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
				</AreaChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
