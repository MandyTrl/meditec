"use client"
import React, { useEffect, useState } from "react"
import { ChartContainer } from "../../ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import treatmentIcon from "@assets/icons/treatment.svg"

export const Treatments = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: ComponentProps) => {
	const [chartDatas, setChartDatas] = useState<number>(0)

	useEffect(() => {
		if (!datas) {
			console.log("no datas for Number of Treatments available")
		}

		if (!hasHospitalSelected) {
			const sumOfTreatments = (datas: Hospital[]) => {
				let total = 0
				for (const hospital of datas) {
					total += hospital.overview.totalTreatments
				}
				return total
			}
			setChartDatas(sumOfTreatments(datas))
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
				title="Treatments"
				icon={treatmentIcon}
				description="Number of treatments"
			/>

			<div className="flex flex-col overflow-hidden">
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
