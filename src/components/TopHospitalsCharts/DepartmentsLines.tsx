import { useEffect } from "react"
import clsx from "clsx"
import {
	LineChart,
	CartesianGrid,
	XAxis,
	Tooltip,
	Legend,
	Line,
	ResponsiveContainer,
} from "recharts"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { ChartHeader } from "../ChartUI/ChartHeader"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { CustomAxisTick } from "../ChartUI/CustomAxisTick"
import { handleChartHeight, handleChartWidth, shadowTool } from "@/utils/utils"
import doctorIcon from "@assets/icons/doctor.svg"

export const DepartmentsLines = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"
	const { hospital, hospitalSelected } = useHospitalSelected()

	useEffect(() => {}, [isMobile])

	return (
		<ChartContainer>
			<ChartHeader
				title="Acceptance rate"
				icon={doctorIcon}
				description="Waiting time ratio and number of patients per day by department"
			/>

			<div className="w-full md:overflow-x-auto md:flex">
				{hospital.map((el: Hospital) => {
					return (
						<div
							key={el.name}
							className={clsx(hospitalSelected ? "my1" : "my-5", "w-full")}>
							{!hospitalSelected && (
								<p className="md:mb-1 font-medium">{el.name}</p>
							)}

							<Legend iconSize={12} wrapperStyle={{ paddingTop: "2px" }} />

							<ResponsiveContainer
								width={handleChartWidth(isMobile)}
								height={handleChartHeight(isMobile)}>
								<LineChart
									data={el.hospitalDepartments}
									margin={{
										top: isMobile ? 14 : 12,
										right: isMobile ? 30 : 40,
										left: isMobile ? 30 : 40,
										bottom: 0,
									}}>
									<CartesianGrid stroke="#ebf5fb" />

									<XAxis
										dataKey="department"
										stroke="#1b4f72"
										height={50}
										interval={0}
										tickMargin={18}
										tick={(props) => <CustomAxisTick {...props} />}
									/>

									<Line
										type="monotone"
										dataKey="patientsPerDay"
										stroke="#1b4f72"
									/>
									<Line
										type="monotone"
										dataKey="averageWaitTime"
										stroke="#EF62FF"
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
								</LineChart>
							</ResponsiveContainer>
						</div>
					)
				})}
			</div>
		</ChartContainer>
	)
}
