import React from "react"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { EmployeesPie } from "@components/TopHospitalsCharts/EmployeesPie"
import { SatisfactionRate } from "@components/TopHospitalsCharts/SatisfactionRate"
import { Patients } from "@components/TopHospitalsCharts/Patients"

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
			<div className="md:flex w-full md:gap-4">
				<SatisfactionRate
					hasHospitalSelected={hasHospitalSelected}
					datas={datas}
				/>
				<Patients
					hasHospitalSelected={hasHospitalSelected}
					datas={datas}
					isMobile={isMobile}
				/>
				<EmployeesPie
					hasHospitalSelected={hasHospitalSelected}
					datas={datas}
					isMobile={isMobile}
				/>
			</div>
		</section>
	)
}
