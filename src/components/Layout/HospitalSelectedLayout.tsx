import React from "react"
import { SatisfactionRate } from "@/components/TopHospitalsCharts/KeyNumbers/SatisfactionRate"
import { HospitalizationsBar } from "@components/TopHospitalsCharts/HospitalizationsBar"
// import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
import { DepartmentsBar } from "@components/TopHospitalsCharts/DepartmentsBar"
import { DoctorSpecialties } from "@components/TopHospitalsCharts/DoctorSpecialties"

type HospitalSelectedLayoutProps = {
	isMobile: boolean
}

export const HospitalSelectedLayout = ({
	isMobile,
}: HospitalSelectedLayoutProps) => {
	return isMobile ? (
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-4">
			<div className="md:flex w-full md:gap-4">
				<SatisfactionRate />
				<HospitalizationsBar />
			</div>
			<div className="md:flex w-full md:gap-4">
				<div className="md:w-2/5">
					<DoctorSpecialties />
				</div>
				<div className="md:w-3/5">
					<DepartmentsBar />
				</div>
			</div>
		</section>
	) : (
		<section className="w-full flex flex-col flex-wrap md:gap-2">
			<div className="flex gap-2">
				<div className="w-2/5 flex flex-col gap-2">
					<SatisfactionRate />
					<DepartmentsBar />
				</div>
				<div className="w-3/5 flex gap-2">
					<HospitalizationsBar />
					<DoctorSpecialties />
				</div>
			</div>
		</section>
	)
}
