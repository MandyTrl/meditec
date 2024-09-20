import React from "react"
import { ResumeChart } from "@/components/TopHospitalsCharts/ResumeChart"
import { Hospitalizations } from "@components/TopHospitalsCharts/Hospitalizations"
import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
import { DoctorSpecialties } from "@components/TopHospitalsCharts/DoctorSpecialties"

export const TopHospitalsLayout = () => {
	return (
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-2">
			<div className="md:flex w-full md:gap-2">
				<ResumeChart />
				<Hospitalizations />
			</div>

			<div className="md:flex w-full md:gap-2">
				<div className="md:w-2/5">
					<DoctorSpecialties />
				</div>
				<div className="md:w-3/5">
					<DepartmentsLines />
				</div>
			</div>

			{/* <div className="md:w-2/4"></div> */}
		</section>
	)
}
