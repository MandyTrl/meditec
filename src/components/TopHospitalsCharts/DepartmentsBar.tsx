import { useEffect, useState } from "react"
import clsx from "clsx"
import {
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Bar,
	BarChart,
} from "recharts"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import {
	DepartmentSummary,
	HospitalDepartment,
} from "@/utils/data/hospitals/hospitalsTypes"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { CustomAxisTick } from "@components/ChartUI/CustomAxisTick"
import { handleChartHeight, handleChartWidth, shadowTool } from "@/utils/utils"
import { CustomBar } from "@components/ChartUI/CustomBar"
import doctorIcon from "@assets/icons/doctor.svg"
import {
	topHospitals,
	aggregateHospitalDepartments,
} from "@/utils/data/hospitals/hospitals"

export const DepartmentsBar = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"
	const { hospital, hospitalSelected } = useHospitalSelected()
	const [chartData, setChartData] = useState<
		HospitalDepartment[] | DepartmentSummary[]
	>([])

	useEffect(() => {}, [isMobile])

	useEffect(() => {
		if (hospitalSelected) {
			const hospitalFound = topHospitals.find(
				(el) => el.name === hospital[0]?.name
			)
			if (hospitalFound) {
				setChartData(hospitalFound.hospitalDepartments)
			}
		} else {
			setChartData(aggregateHospitalDepartments(topHospitals))
		}
	}, [hospital, hospitalSelected])

	return (
		<ChartContainer>
			<ChartHeader
				title="Acceptance rate"
				icon={doctorIcon}
				description="Waiting time ratio and number of patients per day by department"
			/>

			<div className="w-full md:overflow-x-auto md:flex">
				<div className={clsx(hospitalSelected ? "my1" : "my-5", "w-full")}>
					{!hospitalSelected && (
						<p className="md:mb-1 font-medium">{hospitalSelected}</p>
					)}

					<Legend iconSize={12} wrapperStyle={{ paddingTop: "2px" }} />

					<ResponsiveContainer
						width={handleChartWidth(isMobile)}
						height={handleChartHeight(isMobile)}>
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
								dataKey="department"
								stroke="#1b4f72"
								height={50}
								interval={0}
								tickMargin={18}
								tick={(props) => <CustomAxisTick {...props} />}
							/>

							<Legend
								iconType="circle"
								iconSize={12}
								wrapperStyle={{ paddingTop: "15px" }}
							/>

							<Bar
								type="monotone"
								dataKey={
									hospitalSelected ? "patientsPerDay" : "averagePatientsPerDay"
								}
								fill="#1b4f72"
								shape={(props: any) => <CustomBar {...props} />}
							/>
							<Bar
								type="monotone"
								dataKey="averageWaitTime"
								fill="#aed6f1"
								barSize={20}
								shape={(props: any) => (
									<CustomBar customWidth={20} {...props} />
								)}
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
				</div>
			</div>
		</ChartContainer>
	)
}
