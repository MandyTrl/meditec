"use client"
import React, { useContext, useEffect, useState } from "react"
import clsx from "clsx"
import { HospitalContext } from "@utils/Context/index"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { resumeTopHospitals } from "@/utils/data/hospitals/hospitals"
import { ResumeHospital } from "@/utils/data/hospitals/hospitalsTypes"

export const ResumeBar = () => {
	const hospitalCtxt = useContext(HospitalContext)
	const { handleHospital } = hospitalCtxt
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
				className="group flex flex-col items-center text-center hover:opacity-80 transition-all duration-150 ease-in-out hover:cursor-pointer"
				onClick={() => handleHospital(el.name)}>
				<p className="w-fit md:w-[85px] h-fit md:h-[85px] font-semibold border-2 border-secondary group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-150 ease-in-out rounded-full py-5 px-4 mb-3 text-xl flex items-center justify-center">
					{el.satisfactionRate}
				</p>
				<p className="font-medium">{el.name}</p>
				<p className="text-xs">{el.location}</p>
			</div>
		)
	}

	return (
		<div className="h-fit w-full md:w-max bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold text-center md:text-left mt-2 mb-7 md:mb-10">
				Satisfaction %
			</h4>

			<div
				className={clsx(
					hospitalSelected ? "grid-cols" : "grid-cols-2 gap-y-5 gap-x-4",
					"grid my-2"
				)}>
				{hospitalsToRender.map(renderHospital)}
			</div>
		</div>
	)
}
