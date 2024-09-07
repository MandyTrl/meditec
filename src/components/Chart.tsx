import React from "react"
import { LineChart, Line, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"

export const Chart = () => {
	const data = [
		{ name: "Page A", uv: 400, pv: 2400, amt: 2400 },
		{ name: "Page A", uv: 450, pv: 2400, amt: 2400 },
		{ name: "Page A", uv: 480, pv: 2400, amt: 2400 },
		{ name: "Page A", uv: 410, pv: 2400, amt: 2400 },
	]

	return (
		<LineChart width={400} height={400} data={data}>
			<Line type="monotone" dataKey="uv" stroke="#8d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
		</LineChart>
	)
}
