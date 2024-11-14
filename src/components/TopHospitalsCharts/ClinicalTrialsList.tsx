import { useEffect, useState } from "react"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ClinicalTrial, Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import treatmentIcon from "@assets/icons/treatment.svg"
import clsx from "clsx"

export const ClinicalTrialsList = ({
	datas,
	isMobile,
	hasHospitalSelected,
}: ComponentProps) => {
	const [chartData, setChartData] = useState<ClinicalTrial[] | null>(null)

	useEffect(() => {
		const clinicalTrialsList = datas.flatMap(
			(hospital: Hospital) => hospital.clinicalTrials
		)

		setChartData(clinicalTrialsList)
	}, [datas])

	return (
		<ChartContainer>
			<ChartHeader title="Clinical Trials" icon={treatmentIcon} />

			<table>
				<thead className="text-left">
					<tr>
						<th>Name</th>
						<th>Statut</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Patients</th>
					</tr>
				</thead>

				<tbody className="mx-[2px] divide-y divide-primary/20">
					{chartData?.map((trial: ClinicalTrial) => (
						<tr key={trial.name} className="py-2">
							<td>{trial.name}</td>
							<td
								className={clsx(
									trial.status === "En cours" ? "bg-fushia/10" : "bg-secondary",
									"rounded-2xl px-2 py-[2px]"
								)}>
								{trial.status}
							</td>
							<td>{trial.startDate}</td>
							<td>{trial.endDate}</td>
							<td className="text-center">{trial.totalPatients}</td>
						</tr>
					))}
				</tbody>
			</table>
		</ChartContainer>
	)
}
