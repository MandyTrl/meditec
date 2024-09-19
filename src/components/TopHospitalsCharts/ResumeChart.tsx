"use client"
import React, { useContext, useEffect, useState } from "react"
import clsx from "clsx"
import { HospitalContext } from "@utils/Context/index"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { resumeTopHospitals } from "@/utils/data/hospitals/hospitals"
import { ResumeHospital } from "@/utils/data/hospitals/hospitalsTypes"

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

	//composant rendu en fonction des données choisies (un hôpital || tous les hôpitaux)
	const renderHospital = (el: ResumeHospital) => {
		return (
			<div
				key={el.name}
				className="group flex flex-col items-center text-center hover:opacity-80 transition-all duration-150 ease-in-out">
				<p className="md:w-[85px] h-fit md:h-[85px] font-semibold border-2 border-secondary group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-150 ease-in-out rounded-full py-5 px-4 mb-3 text-xl flex items-center justify-center">
					{el.satisfactionRate}
				</p>
				<p className="font-medium">{el.name}</p>
				<p className="text-xs">{el.location}</p>
			</div>
		)
	}

	return (
		<div className="flex-1 flex flex-col justify-between w-full md:w-max bg-white rounded-2xl p-3 md:p-6">
			<h4 className="font-bold text-center md:text-left mt-2">
				Satisfaction %
			</h4>
			<div className="w-full h-[1px] bg-slate-200 mt-2 mb-4"></div>

			<div
				className={clsx(
					hospitalSelected
						? "flex justify-center items-center"
						: "grid grid-cols-2 gap-y-5 gap-x-4",
					"my-2 h-full"
				)}>
				{hospitalsToRender.map(renderHospital)}
			</div>
		</div>
	)
}
