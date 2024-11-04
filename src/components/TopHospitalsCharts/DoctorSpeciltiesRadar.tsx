import { useEffect, useState } from "react"
import {
	Legend,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from "recharts"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import { handleChartHeight } from "@/utils/utils"
import stethoscopeIcon from "@assets/icons/stethoscope.svg"

type DatasDoctorSpecialties = {
	specialty: string
	numberOfDoctors: number
	satisfactionRate: number
}

type DatasDoctorSpecialtiesProps = {
	datas: Hospital[]
	hasHospitalSelected: boolean
	isMobile: boolean
}

export const DoctorSpecialtiesRadar = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: DatasDoctorSpecialtiesProps) => {
	const [chartDatas, setChartDatas] = useState<DatasDoctorSpecialties[]>([])

	useEffect(() => {
		const specilatiesDatas = (
			datas: Hospital[]
		): DatasDoctorSpecialties[] | undefined => {
			if (!datas || datas.length === 0) {
				console.log("No data for Doctor Specialties available")
				return undefined
			}

			if (hasHospitalSelected) {
				return datas[0].doctorSpecialties
			} else {
				const aggregatedData: Record<
					string,
					{ numberOfDoctors: number; totalSatisfaction: number; count: number }
				> = {}

				datas.forEach((hospital) => {
					hospital.doctorSpecialties.forEach(
						({ specialty, numberOfDoctors, satisfactionRate }) => {
							if (!aggregatedData[specialty]) {
								aggregatedData[specialty] = {
									numberOfDoctors: 0,
									totalSatisfaction: 0,
									count: 0,
								}
							}
							aggregatedData[specialty].numberOfDoctors += numberOfDoctors
							aggregatedData[specialty].totalSatisfaction += satisfactionRate
							aggregatedData[specialty].count += 1
						}
					)
				})

				return Object.keys(aggregatedData).map((specialty) => ({
					specialty,
					numberOfDoctors: aggregatedData[specialty].numberOfDoctors,
					satisfactionRate: Math.round(
						aggregatedData[specialty].totalSatisfaction /
							aggregatedData[specialty].count
					),
				}))
			}
		}

		const result = specilatiesDatas(datas)
		if (result) setChartDatas(result)
	}, [datas, hasHospitalSelected])

	return (
		<ChartContainer>
			<ChartHeader
				title="Specialties"
				icon={stethoscopeIcon}
				description="Ratio between satisfaction rate and number of doctors per specialty"
			/>

			<ResponsiveContainer width="100%" height={handleChartHeight(isMobile)}>
				<RadarChart data={chartDatas}>
					<PolarGrid />
					<PolarAngleAxis dataKey="specialty" />
					<PolarRadiusAxis />
					{chartDatas.map((hospital) => (
						<Radar
							key={hospital.specialty}
							dataKey="numberOfDoctors"
							stroke="#1b4f72"
							fill="#dbeaf4"
							fillOpacity={0.6}
						/>
					))}

					{chartDatas.map((hospital) => (
						<Radar
							key={hospital.satisfactionRate}
							dataKey="satisfactionRate"
							stroke="#EF62FF"
							fill="#FDE6FF"
							fillOpacity={0.4}
						/>
					))}
					<Legend />
				</RadarChart>
			</ResponsiveContainer>
		</ChartContainer>
	)
}
