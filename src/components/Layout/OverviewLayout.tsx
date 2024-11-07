import React from "react"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { EmployeesPie } from "@components/TopHospitalsCharts/EmployeesPie"
import { SatisfactionRate } from "@/components/TopHospitalsCharts/KeyNumbers/SatisfactionRate"
import { Patients } from "@/components/TopHospitalsCharts/KeyNumbers/Patients"
import { Treatments } from "@/components/TopHospitalsCharts/KeyNumbers/Treatments"
import { MonthlyHospitalizations } from "@components/TopHospitalsCharts/MonthlyHospitalizations"
import { DoctorSpecialtiesRadar } from "@components/TopHospitalsCharts/DoctorSpeciltiesRadar"

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
		<section className="w-full flex flex-col md:flex-row flex-wrap md:gap-3">
			<div className="w-full md:flex md:gap-3">
				<div className="w-full md:flex flex-col md:gap-3">
					<div className="key__number__container w-full md:flex md:gap-3">
						<SatisfactionRate
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile
						/>
						<Patients
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile
						/>
						<Treatments
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile
						/>
					</div>

					<div className="w-full md:flex-1">
						<MonthlyHospitalizations
							hasHospitalSelected={hasHospitalSelected}
							datas={datas}
							isMobile
						/>
					</div>
				</div>

				<div className="flex flex-col w-auto shrink-0 md:gap-3">
					<EmployeesPie
						hasHospitalSelected={hasHospitalSelected}
						datas={datas}
						isMobile
					/>

					<DoctorSpecialtiesRadar
						hasHospitalSelected={hasHospitalSelected}
						datas={datas}
						isMobile
					/>
				</div>
			</div>
		</section>
	)
}
