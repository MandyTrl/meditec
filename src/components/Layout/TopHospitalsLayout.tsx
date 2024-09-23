import React from "react"
import { ResumeChart } from "@/components/TopHospitalsCharts/ResumeChart"
import { Hospitalizations } from "@components/TopHospitalsCharts/Hospitalizations"
import { DepartmentsLines } from "@components/TopHospitalsCharts/DepartmentsLines"
import { DoctorSpecialties } from "@components/TopHospitalsCharts/DoctorSpecialties"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { useBreakpoint } from "@/utils/hooks/useBP"

export const TopHospitalsLayout = () => {
	const { hospitalSelected } = useHospitalSelected()
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"

	return (isMobile && hospitalSelected) || !hospitalSelected ? (
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
		</section>
	) : (
		<section className="w-full flex flex-col flex-wrap md:gap-2">
			<div className="flex gap-2">
				<div className="w-2/5 flex flex-col gap-2">
					<ResumeChart />
					<DepartmentsLines />
				</div>
				<div className="w-3/5 flex gap-2">
					<Hospitalizations />
					<DoctorSpecialties />
				</div>
			</div>
		</section>
	)
}
