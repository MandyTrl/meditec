import React, { useEffect, useState } from "react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { CustomAxisTick } from "@components/ChartUI/CustomAxisTick"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { handleChartHeight } from "@/utils/utils"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import patientsIcon from "@assets/icons/patients.svg"
import CustomTooltip from "@components/ChartUI/CustomToolType"
import { ResumeCharts } from "../UI/ResumeCharts"

type ChartData = {
	month: string
	year: number
	hospitalizations: number
}

export const MonthlyHospitalizations = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: ComponentProps) => {
	const { hospital } = useHospitalSelected()
	const [chartData, setChartData] = useState<ChartData[] | []>([])
	const [resumeDatas, setResumeDatas] = useState<ChartData | null>(null)

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

			const highestHospitalizations =
				chartData &&
				chartData.reduce(
					(max, hospital) =>
						hospital.hospitalizations > max.hospitalizations ? hospital : max,
					chartData[0]
				)

			setResumeDatas(highestHospitalizations)
		}
	}, [chartData, datas, hasHospitalSelected, hospital])

	return (
		<ChartContainer>
			<ChartHeader
				title="Monthly hospitalizations"
				icon={patientsIcon}
				description="Number of hospitalizations per month"
			/>

			<ResponsiveContainer
				width="100%"
				height={handleChartHeight({ isMobile })}>
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

					<defs>
						<linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="0%" stopColor="#AED6F1" stopOpacity={0.9} />
							<stop offset="100%" stopColor="#ffffff" stopOpacity={0.4} />
						</linearGradient>
					</defs>

					<Area
						dataKey="hospitalizations"
						stroke="#1b4f72"
						fill="url(#colorGradient)"
						type={"monotone"}
						dot={false}
					/>

					<Tooltip content={(props) => <CustomTooltip {...props} />} />
				</AreaChart>
			</ResponsiveContainer>

			{resumeDatas && (
				<ResumeCharts
					datas={[
						{
							description: `Month with the most hospitalizations - "${resumeDatas.month}" :`,
							value: resumeDatas.hospitalizations,
						},
					]}
				/>
			)}
		</ChartContainer>
	)
}
