import React from "react"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { EmployeesPie } from "@components/TopHospitalsCharts/EmployeesPie"

type OverviewLayoutProps = {
	isMobile: boolean
	datas: Hospital[]
	hasHospitalSelected: boolean
}

export const OverviewLayout = ({
	isMobile,
	hasHospitalSelected,
	datas,
}: OverviewLayoutProps) => {
	return (
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-4">
			<EmployeesPie
				hasHospitalSelected={hasHospitalSelected}
				datas={datas}
				isMobile={isMobile}
			/>
		</section>
	)
}
