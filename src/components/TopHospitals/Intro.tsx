"use client"
import React, { useContext, useEffect, useState } from "react"
import { HospitalContext } from "@utils/Context/index"
import { useHospitalSelected } from "@/utils/Hooks/useHospitalSelected"
import { resumeTopHospitals, ResumeHospital } from "@/utils/Datas/hospitals"

export const Intro = () => {
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
				className="group flex flex-col items-center my-3 md:my-0 mx-2 md:mx-4 text-center hover:opacity-80 transition-all duration-150 ease-in-out hover:cursor-pointer"
				onClick={() => handleHospital(el.name)}>
				<p className="w-fit font-semibold border-2 border-secondary group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-150 ease-in-out  rounded-full py-5 px-4 mb-3">
					{el.satisfactionRate}
				</p>
				<p className="font-medium">{el.name}</p>
				<p className="text-xs">{el.location}</p>
			</div>
		)
	}

	return (
		<div className="w-full md:w-fit bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold mb-5 md:mb-10">Satisfaction %</h4>

			<div className="flex flex-wrap md:flex-row items-center justify-between my-2">
				{hospitalsToRender.map(renderHospital)}
			</div>
		</div>
	)
}
