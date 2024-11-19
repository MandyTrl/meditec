"use client"
import { useEffect, useState } from "react"
import clsx from "clsx"
import {
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Bar,
	YAxis,
	Line,
	ComposedChart,
} from "recharts"
import { HospitalDepartment } from "@/utils/data/hospitals/hospitalsTypes"
import { CustomBar } from "@components/ChartUI/CustomBar"
import { ResumeCharts } from "@components/UI/ResumeCharts"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { CustomAxisTick } from "@components/ChartUI/CustomAxisTick"
import CustomTooltip from "@components/ChartUI/CustomToolType"
import {
	topHospitals,
	aggregateHospitalDepartments,
} from "@/utils/data/hospitals/hospitals"
import { handleChartHeight } from "@/utils/utils"
import doctorIcon from "@assets/icons/doctor.svg"

export const DepartmentsBar = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: ComponentProps) => {
	const [chartData, setChartData] = useState<HospitalDepartment[]>([])
	const [resumeDatas, setResumeDatas] = useState({
		averageWaitTime: 0,
		sumOfPatientsPerDay: 0,
	})

	useEffect(() => {}, [isMobile])

	useEffect(() => {
		if (hasHospitalSelected) {
			const hospitalFound = topHospitals.find(
				(el) => el.name === datas[0]?.name
			)
			if (hospitalFound) {
				setChartData(hospitalFound.hospitalDepartments)
			}
		} else {
			setChartData(aggregateHospitalDepartments(topHospitals))
		}

		const calculateTotals = (datas: HospitalDepartment[]) => {
			const totalPatientsPerDay = datas.reduce(
				(total, dept) => total + dept.patientsPerDay,
				0
			)

			const totalWaitTime = datas.reduce(
				(total, dept) => total + dept.averageWaitTime * dept.patientsPerDay,
				0
			)

			const averageWaitTime =
				totalPatientsPerDay > 0
					? Math.ceil(totalWaitTime / totalPatientsPerDay)
					: 0

			setResumeDatas({
				sumOfPatientsPerDay: totalPatientsPerDay,
				averageWaitTime: averageWaitTime,
			})
		}

		calculateTotals(chartData)
	}, [chartData, datas, hasHospitalSelected, resumeDatas])

	return (
		<ChartContainer>
			<ChartHeader
				title="Acceptance rate"
				icon={doctorIcon}
				description="Waiting time ratio and number of patients per day by department"
			/>

			<div className="w-full md:overflow-x-auto md:flex flex-col">
				<div className={clsx(hasHospitalSelected ? "my1" : "my-5", "w-full")}>
					{!hasHospitalSelected && (
						<p className="md:mb-1 font-medium">{hasHospitalSelected}</p>
					)}

					<Legend iconSize={12} wrapperStyle={{ paddingTop: "2px" }} />

					<ResponsiveContainer
						width="100%"
						height={handleChartHeight({ isMobile })}>
						<ComposedChart
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
								dataKey="department"
								stroke="#1b4f72"
								height={50}
								interval={0}
								tickMargin={18}
								tick={(props) => <CustomAxisTick {...props} />}
							/>

							<YAxis
								dataKey="patientsPerDay"
								yAxisId="left"
								orientation="left"
								stroke="#1b4f72"
								label={{
									value: "Patients per day",
									angle: -90,
									dx: -28,
									fontSize: "14px",
									fill: "#1b4f72",
								}}
								style={{
									fill: "#1b4f72",
								}}
							/>

							<Bar
								type="monotone"
								yAxisId="left"
								dataKey="patientsPerDay"
								name="patients per day"
								fill="#AED6F1"
								shape={(props: any) => <CustomBar {...props} />}
							/>

							<YAxis
								dataKey="averageWaitTime"
								yAxisId="right"
								orientation="right"
								stroke="#1b4f72"
								label={{
									value: "Average wait time (mins)",
									angle: -90,
									dx: 28,
									fontSize: "14px",
									fill: "#1b4f72",
								}}
								style={{
									fill: "#1b4f72",
								}}
							/>

							<Line
								type="monotone"
								yAxisId="right"
								dataKey="averageWaitTime"
								name="average wait time (mins)"
								stroke="#1b4f72"
								fill="#1b4f72"
							/>

							<Tooltip content={(props) => <CustomTooltip {...props} />} />
						</ComposedChart>
					</ResponsiveContainer>
				</div>

				<ResumeCharts
					datas={[
						{
							description: "Total patients per day :",
							value: resumeDatas.sumOfPatientsPerDay,
						},
						{
							description: "Average wait time (mins) :",
							value: resumeDatas.averageWaitTime,
						},
					]}
				/>
			</div>
		</ChartContainer>
	)
}
