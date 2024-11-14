import React from "react"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { EmployeesPie } from "@components/TopHospitalsCharts/EmployeesPie"
import { DepartmentsBar } from "@components/TopHospitalsCharts/DepartmentsBar"
import { Patients } from "@/components/TopHospitalsCharts/KeyNumbers/Patients"
import { Treatments } from "@/components/TopHospitalsCharts/KeyNumbers/Treatments"
import { DoctorSpecialtiesRadar } from "@components/TopHospitalsCharts/DoctorSpeciltiesRadar"
import { MonthlyHospitalizations } from "@components/TopHospitalsCharts/MonthlyHospitalizations"
import { SatisfactionRate } from "@/components/TopHospitalsCharts/KeyNumbers/SatisfactionRate"
import { ClinicalTrialsList } from "../TopHospitalsCharts/ClinicalTrialsList"

type OverviewLayoutProps = {
	isMobile: boolean
	datas: Hospital[]
	hasHospitalSelected: boolean
}

export type ComponentProps = {
	datas: Hospital[]
	hasHospitalSelected: boolean
	isMobile: boolean
}

export const OverviewLayout = ({
	isMobile,
	hasHospitalSelected,
	datas,
}: OverviewLayoutProps) => {
	return (
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-4">
			<div className="w-full md:flex md:gap-4">
				<div className="w-full md:flex flex-col md:gap-4">
					<div className="key__number__container w-full md:flex md:gap-4">
						<SatisfactionRate
							datas={datas}
							isMobile={isMobile}
							hasHospitalSelected={hasHospitalSelected}
						/>
						<Patients
							datas={datas}
							isMobile={isMobile}
							hasHospitalSelected={hasHospitalSelected}
						/>
						<Treatments
							datas={datas}
							isMobile={isMobile}
							hasHospitalSelected={hasHospitalSelected}
						/>
					</div>

					<div className="w-full flex flex-col md:flex-1 md:gap-4">
						<MonthlyHospitalizations
							datas={datas}
							isMobile={isMobile}
							hasHospitalSelected={hasHospitalSelected}
						/>

						<ClinicalTrialsList
							datas={datas}
							isMobile={isMobile}
							hasHospitalSelected={hasHospitalSelected}
						/>
					</div>
				</div>

				<div className="flex flex-col w-auto shrink-0 md:gap-4">
					<EmployeesPie
						datas={datas}
						isMobile={isMobile}
						hasHospitalSelected={hasHospitalSelected}
					/>
					<DoctorSpecialtiesRadar
						datas={datas}
						isMobile={isMobile}
						hasHospitalSelected={hasHospitalSelected}
					/>
					<DepartmentsBar
						datas={datas}
						isMobile={isMobile}
						hasHospitalSelected={hasHospitalSelected}
					/>
				</div>
			</div>
		</section>
	)
}
