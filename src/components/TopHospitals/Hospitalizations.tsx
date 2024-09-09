import React from "react"
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	Legend,
} from "recharts"
import { hospitalizationsPerYear } from "@/utils/Datas/hospitals"
import { CustomTextLabel } from "@components/ChartUI/CustomTextLabel"

export const Hospitalizations = () => {
	const chartData = hospitalizationsPerYear.map((hospital) => {
		return {
			name: hospital.name,
			"2023": hospital.yearlyHospitalizations["2023"],
			"2024": hospital.yearlyHospitalizations["2024"],
		}
	})

	return (
		<div className="w-full md:w-fit mt-2 md:mt-0 ml-0 md:ml-2 bg-white rounded-2xl p-6 text-primary shadow-md">
			<h4 className="font-bold mb-5 md:mb-10">Hospitalisations</h4>

			<BarChart
				width={675}
				height={280}
				data={chartData}
				barGap={3}
				margin={{
					top: 12,
					right: 18,
					left: 12,
					bottom: 0,
				}}>
				<CartesianGrid stroke="#d2cee5" strokeDasharray="3 3" />

				<XAxis dataKey="name" stroke="#2100AD" height={17} />

				<YAxis stroke="#2100AD" allowDataOverflow />

				<Tooltip
					wrapperStyle={{
						width: 180,
						backgroundColor: "rgba(210, 229, 255, 0.5)",
					}}
				/>

				<Legend
					width={100}
					wrapperStyle={{
						top: -60,
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
