"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { ComponentProps } from "@components/Layout/OverviewLayout"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ClinicalTrial, Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import treatmentIcon from "@assets/icons/treatment.svg"
import sortIcon from "@assets/icons/sort.svg"
import { sortData } from "@/utils/utils"

export const ClinicalTrialsList = ({
	datas,
	hasHospitalSelected,
}: ComponentProps) => {
	const [chartData, setChartData] = useState<ClinicalTrial[] | null>(null)
	const [sortOrder, setSortOrder] = useState(true) //"true" = croissant, "false" = décroissant

	useEffect(() => {
		const clinicalTrialsList = datas.flatMap(
			(hospital: Hospital) => hospital.clinicalTrials
		)

		setChartData(clinicalTrialsList)
	}, [datas])

	const handleSort = (key: string) => {
		if (chartData) {
			const sortedData = sortData(chartData, key, sortOrder)
			setChartData(sortedData)
			setSortOrder(!sortOrder) //inverse l’ordre de tri pour le prochain clic
		}
	}

	return (
		<ChartContainer>
			<ChartHeader title="Clinical Trials" icon={treatmentIcon} />

			<table className="w-full">
				<thead className="text-left">
					<tr>
						<th className="pr-2" onClick={() => handleSort("name")}>
							<div className="inline-flex items-center hover:cursor-pointer ease-in-out duration-150 transform-all hover:opacity-80 font-semibold">
								<span>Name</span>
								<Image alt="" src={sortIcon} className="ml-2 h-3 w-3" />
							</div>
						</th>
						<th className="px-4" onClick={() => handleSort("status")}>
							<div className="inline-flex items-center hover:cursor-pointer ease-in-out duration-150 transform-all hover:opacity-80 font-semibold">
								<span>Status</span>
								<Image alt="" src={sortIcon} className="ml-2 h-3 w-3" />
							</div>
						</th>
						<th className="px-2" onClick={() => handleSort("startDate")}>
							<div className="inline-flex items-center hover:cursor-pointer ease-in-out duration-150 transform-all hover:opacity-80 font-semibold">
								<span>Start Date</span>
								<Image alt="" src={sortIcon} className="ml-2 h-3 w-3" />
							</div>
						</th>
						<th className="px-2" onClick={() => handleSort("endDate")}>
							<div className="inline-flex items-center hover:cursor-pointer ease-in-out duration-150 transform-all hover:opacity-80 font-semibold">
								<span>End Date</span>
								<Image alt="" src={sortIcon} className="ml-2 h-3 w-3" />
							</div>
						</th>
						<th className="px-2" onClick={() => handleSort("totalPatients")}>
							<div className="inline-flex items-center hover:cursor-pointer ease-in-out duration-150 transform-all hover:opacity-80 font-semibold">
								<span>Patients</span>
								<Image alt="" src={sortIcon} className="ml-2 h-3 w-3" />
							</div>
						</th>
					</tr>
				</thead>

				<tbody className="mx-[2px] divide-y divide-primary/20">
					{chartData?.map((trial: ClinicalTrial) => (
						<tr key={trial.name} className="px-2">
							<td className="py-2 truncate">{trial.name}</td>
							<td className="px-2">
								<span
									className={clsx(
										trial.status === "En cours"
											? "bg-fushia/10"
											: "bg-secondary",
										"rounded-2xl px-2 py-[1px]"
									)}>
									{trial.status}
								</span>
							</td>
							<td className="px-2">{trial.startDate}</td>
							<td className="px-2">{trial.endDate}</td>
							<td className="text-center">{trial.totalPatients}</td>
						</tr>
					))}
				</tbody>
			</table>
		</ChartContainer>
	)
}
