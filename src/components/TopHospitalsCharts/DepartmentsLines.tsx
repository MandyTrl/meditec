import React from "react"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
} from "recharts"
import { useBreakpoint } from "@/utils/hooks/useBP"

export const DepartmentsLines = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"
	const { hospital } = useHospitalSelected()

	return (
		<div className="h-fit w-full md:w-fit bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold text-center md:text-left mb-7 md:mb-10">
				Patients by departments
			</h4>

			<div className="flex flex-wrap justify-around">
				{hospital.map((el: Hospital) => {
					return (
						<div key={el.name}>
							<p className="mb-0 md:mb-1">{el.name}</p>

							<LineChart
								width={isMobile ? 320 : 565}
								height={isMobile ? 350 : 300}
								data={el.hospitalDepartments}
								margin={{
									top: isMobile ? 15 : 12,
									right: isMobile ? 20 : 12,
									left: isMobile ? 20 : 12,
									bottom: isMobile ? 35 : 12,
								}}>
								<CartesianGrid strokeDasharray="3 3" />

								<XAxis dataKey="department" padding={{ left: 20, right: 20 }} />
								{!isMobile && <YAxis />}

								<Tooltip />
								<Legend
									width={300}
									wrapperStyle={{
										bottom: isMobile ? 40 : 20,
										right: isMobile ? 0 : 90,
										lineHeight: "50px",
									}}
								/>

								<Line
									type="monotone"
									dataKey="patientsPerDay"
									stroke="#64BEFF"
									activeDot={{ r: 4 }}
								/>
								<Line
									type="monotone"
									dataKey="averageWaitTime"
									stroke="#EF62FF"
								/>
							</LineChart>
						</div>
					)
				})}
			</div>
		</div>
	)
}
