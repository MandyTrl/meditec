import React from "react"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts"
import { hospitalizationsPerYear } from "@/utils/hospitals"

export const Hospitalizations = () => {
	console.log(hospitalizationsPerYear)

	return (
		<div className="w-fit bg-white rounded-2xl p-6 text-primary shadow-md">
			<BarChart width={150} height={40} data={hospitalizationsPerYear}>
				<Bar dataKey="year" fill="#8884d8" />
			</BarChart>
		</div>
	)
}
