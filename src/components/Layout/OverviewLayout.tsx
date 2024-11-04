import React from "react"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { EmployeesPie } from "@components/TopHospitalsCharts/EmployeesPie"
import { SatisfactionRate } from "@components/TopHospitalsCharts/SatisfactionRate"
import { Patients } from "@components/TopHospitalsCharts/Patients"
import { TreatmentsData } from "@components/TopHospitalsCharts/TreatmentsData"
import { MonthlyHospitalizations } from "@components/TopHospitalsCharts/MonthlyHospitalizations"

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
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-3">
			<div className="w-full md:flex md:gap-3">
				<div className="w-full md:flex flex-col md:gap-3">
					<div className="key__number__container w-full md:flex md:gap-3">
						<SatisfactionRate
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
						/>
						<Patients
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile={isMobile}
						/>
						<TreatmentsData
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile={isMobile}
						/>
					</div>

					<div className="w-full md:flex-1">
						<MonthlyHospitalizations
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile={isMobile}
						/>
					</div>
				</div>

				<div className="w-auto shrink-0">
					<EmployeesPie
						hasHospitalSelected={hasHospitalSelected}
						datas={datas}
						isMobile={isMobile}
					/>
				</div>
			</div>
		</section>
	)
}
