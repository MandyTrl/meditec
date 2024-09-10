import React from "react"
import { Intro } from "@/components/TopHospitalsCharts/Intro"
import { Hospitalizations } from "@components/TopHospitalsCharts/Hospitalizations"
import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
// import { DepartmentsPie } from "@components/TopHospitalsCharts/DepartmentsPie"

export const TopHospitalsLayout = () => {
	return (
		<section className="w-full flex flex-col md:flex-row flex-wrap gap-2">
			<Intro />
			<Hospitalizations />
			{/* <DepartmentsPie /> */}

			<DepartmentsLines />
		</section>
	)
}
