// import React, { useState } from "react"
// import { PieChart, Pie } from "recharts"
// import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
// import { ActiveShape } from "@components/ChartUI/ActiveShape"
// import { Hospital } from "@/utils/data/hospitals"

// export const DepartmentsPie = () => {
// 	const [activeIdx, setActiveIdx] = useState<number>(0)
// 	const { hospital } = useHospitalSelected()

// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const handleIdxOnPieEnter = (_: any, index: number) => {
// 		setActiveIdx(index)
// 	}

// 	return (
// 		<div className="h-fit w-full md:w-fit bg-white rounded-2xl p-3 md:p-6">
// 			<h4 className="font-bold text-center md:text-left mb-7 md:mb-10">
// 				Patients by departments
// 			</h4>

// 			<div className="grid grid-cols-2">
// 				{hospital.map((el: Hospital, chartIndex: number) => {
// 					return (
// 						<PieChart key={el.name} width={620} height={620}>
// 							<Pie
// 								activeIndex={activeIdx && activeIdx}
// 								activeShape={ActiveShape}
// 								data={el.hospitalDepartments}
// 								cx="50%"
// 								cy="50%"
// 								innerRadius={50}
// 								outerRadius={80}
// 								fill="#009dff"
// 								dataKey="patientsPerDay"
// 								onMouseEnter={handleIdxOnPieEnter}
// 								onMouseLeave={() => setActiveIdx(chartIndex)}
// 							/>

// 							<p>{el.name}</p>
// 						</PieChart>
// 					)
// 				})}
// 			</div>
// 		</div>
// 	)
// }
