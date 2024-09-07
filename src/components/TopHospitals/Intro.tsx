import React from "react"
import { resumeTopHospitals, ResumeHospital } from "@/utils/hospitals"

export const Intro = () => {
	return (
		<div className="w-full md:w-fit bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold mb-5 md:mb-10">Satisfaction %</h4>

			<div className="flex flex-wrap md:flex-row items-center justify-between my-2">
				{resumeTopHospitals.map((el: ResumeHospital) => {
					return (
						<div
							key={el.name}
							className="group flex flex-col items-center my-3 md:my-0 mx-2 md:mx-4 text-center hover:opacity-80 transition-all duration-150 ease-in-out hover:cursor-pointer">
							<p className="w-fit font-semibold border-2 border-secondary group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-150 ease-in-out  rounded-full py-5 px-4 mb-3">
								{el.satisfactionRate}
							</p>
							<p className="font-medium">{el.name}</p>
							<p className="text-xs">{el.location}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
