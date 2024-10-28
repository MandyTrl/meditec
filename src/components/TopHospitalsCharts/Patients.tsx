"use client"
import React, { useEffect, useState } from "react"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import patientsIcon from "@assets/icons/patients.svg"

type TotalPatientsProps = {
	datas: Hospital[]
	hasHospitalSelected: boolean
	isMobile: boolean
}

export const Patients = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: TotalPatientsProps) => {
	const [chartDatas, setChartDatas] = useState<number>(0)

	useEffect(() => {
		if (!hasHospitalSelected) {
			console.log("no datas for Number of Patients available")
		}

		if (!hasHospitalSelected) {
			const sumOfPatients = (datas: Hospital[]) => {
				let total = 0
				for (const hospital of datas) {
					total += hospital.overview.totalPatients
				}
				return total
			}
			setChartDatas(sumOfPatients(datas))
			// setChartDatas(resumeTopHospitals)
			// } else {
			// 	const hospitalFound = resumeTopHospitals.filter(
			// 		(el) => el.name === datas[0].name
			// 	)

			// 	setChartDatas(hospitalFound)
		}
	}, [datas, hasHospitalSelected])

	return (
		<ChartContainer>
			<ChartHeader
				title="Satisfaction"
				icon={patientsIcon}
				description="Number of patients"
			/>

			<div className="flex flex-col">
				{/* {averageRate ? ( */}
				<p className="font-semibold text-4xl flex items-center justify-center">
					{chartDatas}
				</p>
				{/* ) : (
					chartDatas.map(renderHospital)
				)} */}
			</div>
		</ChartContainer>
	)
}
