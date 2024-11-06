import React from "react"
import { shadowTool } from "@/utils/utils"

type PayloadItem = {
	name: string
	value: string | number
	color: string
}

type CustomTooltipProps = {
	active: boolean
	payload: PayloadItem[]
	label: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
	// vérifie si le tooltip est actif et si des données sont présentes

	if (active && payload && payload.length) {
		const uniquePayload = payload.reduce((acc, entry) => {
			if (!acc.some((item: PayloadItem) => item.name === entry.name)) {
				acc.push(entry)
			}
			return acc
		}, [])

		return (
			<div
				className="custom__tooltip"
				style={{
					border: "none",
					padding: "20px",
					paddingBottom: "15px",
					borderRadius: "8px",
					boxShadow: `${shadowTool}`,
					fontSize: "15px",
					backgroundColor: "#fff",
				}}>
				<p
					className="label"
					style={{
						fontSize: "16px",
						fontWeight: 400,
						lineHeight: "1",
						marginBottom: 6,
					}}>
					{label}
				</p>

				<div className="item" style={{ marginBottom: "5px" }}>
					{uniquePayload.map((entry: PayloadItem) => (
						<div className="item" key={entry.name}>
							<span
								style={{
									fontSize: "15px",
									fontWeight: "600",
									lineHeight: "1",
									color: entry.color,
								}}>
								{entry.name} : {entry.value}
							</span>
						</div>
					))}
				</div>
			</div>
		)
	}

	return null
}

export default CustomTooltip
