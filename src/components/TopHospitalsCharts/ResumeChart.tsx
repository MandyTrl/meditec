"use client"
import React, { useContext, useEffect, useState } from "react"
import { HospitalContext } from "@utils/Context/index"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { resumeTopHospitals } from "@/utils/data/hospitals/hospitals"
import { ResumeHospital } from "@/utils/data/hospitals/hospitalsTypes"
import { ChartContainer } from "../ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import notation from "@assets/icons/sparkles.svg"
import clsx from "clsx"

export const ResumeChart = () => {
	const hospitalCtxt = useContext(HospitalContext)
	const { hospital, hospitalSelected } = useHospitalSelected()

	const [hospitalsToRender, setHospitalsToRender] =
		useState<ResumeHospital[]>(resumeTopHospitals)

	useEffect(() => {
		if (!hospitalCtxt) {
			console.log("no context available")
			setHospitalsToRender(resumeTopHospitals)
			return
		}

		//si le context renvoit un hôpital sélectionné, le trouver dans "resumeTopHospital", sinon renvoyer tous les résumés
		if (!hospitalSelected) {
			setHospitalsToRender(resumeTopHospitals)
		} else {
			const hospitalFound = resumeTopHospitals.filter(
				(el) => el.name === hospital[0].name
			)

			setHospitalsToRender(hospitalFound)
		}
	}, [hospitalCtxt, hospitalCtxt.hospital, hospital, hospitalSelected])

	const renderHospital = (el: ResumeHospital) => {
		return (
			<div
				key={el.name}
				className={clsx(
					hospitalSelected && "border-none",
					"w-full border-b border-secondary/20 group flex items-start hover:opacity-80 transition-all duration-150 ease-in-out gap-2 mb-3 py-1"
				)}>
				<p className="font-semibold transition-all duration-150 ease-in-out text-2xl flex items-center justify-center">
					{el.satisfactionRate}
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
				description="Satisfaction rate in 2024"
			/>

			<div className="flex flex-col">
				{hospitalsToRender.map(renderHospital)}
			</div>
		</ChartContainer>
	)
}
