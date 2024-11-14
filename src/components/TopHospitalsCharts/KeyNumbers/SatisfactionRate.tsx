"use client"
import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { resumeTopHospitals } from "@/utils/data/hospitals/hospitals"
import { Hospital, ResumeHospital } from "@/utils/data/hospitals/hospitalsTypes"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import notation from "@assets/icons/sparkles.svg"

export const SatisfactionRate = ({
	datas,
	hasHospitalSelected,
}: ComponentProps) => {
	const [chartDatas, setChartDatas] = useState<ResumeHospital[] | number>(
		resumeTopHospitals
	)

	const averageRate = typeof chartDatas === "number"

	useEffect(() => {
		if (!datas) {
			console.log("no datas for Satisfaction Rate available")
		}

		if (!hasHospitalSelected) {
			const averageRate = (datas: Hospital[]) => {
				let totalRate = 0
				for (const hospital of datas) {
					totalRate += hospital.overview.satisfactionRate
				}
				return totalRate / datas.length
			}
			setChartDatas(averageRate(datas))
			// setChartDatas(resumeTopHospitals)
		} else {
			const hospitalFound = resumeTopHospitals.filter(
				(el) => el.name === datas[0].name
			)

			setChartDatas(hospitalFound)
		}
	}, [datas, hasHospitalSelected])

	const renderHospital = (el: ResumeHospital) => {
		return (
			<div
				key={el.name}
				className={clsx(
					hasHospitalSelected && "border-none",
					"border-b border-secondary/20 flex items-start hover:opacity-80 transition-all duration-150 ease-in-out gap-2 mb-3 py-1"
				)}>
				<p className="font-semibold transition-all duration-150 ease-in-out text-2xl flex items-center justify-center">
					{el.satisfactionRate}%
				</p>

				<div className="flex flex-col ml-2">
					<p className="font-medium">{el.name}</p>
					<p className="text-xs">{el.location}</p>
				</div>
			</div>
		)
	}

	return (
		<ChartContainer dark>
			<ChartHeader
				title="Satisfaction"
				icon={notation}
				description={
					averageRate
						? "AVG satisfaction rate in 2024"
						: "Satisfaction rate in 2024"
				}
			/>

			<div className="flex flex-col">
				{averageRate ? (
					<p className="font-semibold text-4xl flex items-center justify-center">
						{chartDatas}%
					</p>
				) : (
					chartDatas.map(renderHospital)
				)}
			</div>
		</ChartContainer>
	)
}
