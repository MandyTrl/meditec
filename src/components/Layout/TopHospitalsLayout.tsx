import React from "react"
import { ResumeBar } from "@/components/TopHospitalsCharts/ResumeBar"
import { Hospitalizations } from "@components/TopHospitalsCharts/Hospitalizations"
import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
import { DoctorSpecialties } from "@components/TopHospitalsCharts/DoctorSpecialties"

export const TopHospitalsLayout = () => {
	return (
		<section className="w-full flex flex-col md:flex-row flex-wrap gap-2">
			<ResumeBar />
			<Hospitalizations />

			<DepartmentsLines />

			<DoctorSpecialties />
		</section>
	)
}
