import React from "react"
import { ResumeChart } from "@/components/TopHospitalsCharts/ResumeChart"
import { Hospitalizations } from "@components/TopHospitalsCharts/Hospitalizations"
import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
import { DoctorSpecialties } from "@components/TopHospitalsCharts/DoctorSpecialties"

export const TopHospitalsLayout = () => {
	return (
		<section className="w-full flex flex-col justify-items-stretch items-stretch md:flex-row flex-wrap gap-2">
			<ResumeChart />

			<Hospitalizations />

			<DepartmentsLines />

			<DoctorSpecialties />
		</section>
	)
}
