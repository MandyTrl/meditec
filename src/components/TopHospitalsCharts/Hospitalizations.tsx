import React, { useEffect, useState } from "react"
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	Legend,
} from "recharts"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { CustomTextLabel } from "@components/ChartUI/CustomTextLabel"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"

type ChartData = {
	name: string
	2023: number
	2024: number
}

export const Hospitalizations = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"

	const { hospital, hospitalSelected } = useHospitalSelected()

	const [chartData, setChartData] = useState<ChartData[] | []>([])

	useEffect(() => {
		const hospitalizationsPerYear = hospital.map((el: Hospital) => {
			const hospitalData: {
				name: string
				yearlyHospitalizations: { [year: number]: number }
			} = {
				name: el.name,
				yearlyHospitalizations: [],
			}

			//calcul de la somme des hospitalisations par année et par hôpital
			el.monthlyHospitalizations.forEach((el) => {
				if (!hospitalData.yearlyHospitalizations[el.year]) {
					hospitalData.yearlyHospitalizations[el.year] = 0
				}
				hospitalData.yearlyHospitalizations[el.year] += el.value
			})

			return hospitalData
		})

		const data: ChartData[] = hospitalizationsPerYear.map((hospital) => {
			return {
				name: hospital.name,
				"2023": hospital.yearlyHospitalizations["2023"],
				"2024": hospital.yearlyHospitalizations["2024"],
			}
		})

		setChartData(data)
	}, [hospital])

	const handleChartWidth = () => {
		if (isMobile) {
			return 320
		} else {
			if (hospitalSelected) {
				return 375
			}
			return 700
		}
	}

	return (
		<div className="w-full md:w-max mt-2 md:mt-0 bg-white rounded-2xl p-3 md:p-6 text-primary shadow-md">
			<h4 className="font-bold text-center md:text-left mb-7 md:mb-10">
				Hospitalisations
			</h4>

			<BarChart
				width={handleChartWidth()}
				height={isMobile ? 300 : 280}
				data={chartData}
				barGap={3}
				margin={{
					top: isMobile ? 35 : 12,
					right: isMobile ? 30 : 18,
					left: isMobile ? 0 : 12,
					bottom: 0,
				}}>
				<CartesianGrid stroke="#d2cee5" strokeDasharray="3 3" />

				<XAxis dataKey="name" stroke="#2100AD" height={17} />

				{!isMobile && (
					<YAxis stroke="#2100AD" allowDataOverflow width={60} tickSize={6} />
				)}

				<Tooltip
					wrapperStyle={{
						width: 180,
						backgroundColor: "rgba(210, 229, 255, 0.5)",
					}}
				/>

				<Legend
					width={100}
					wrapperStyle={{
						top: isMobile ? -20 : -40,
						right: 0,
						lineHeight: "17px",
					}}
				/>

				<Bar dataKey="2023" fill="#64BEFF" label={CustomTextLabel} />
				<Bar dataKey="2024" fill="#EF62FF" label={CustomTextLabel} />
			</BarChart>
		</div>
	)
}
