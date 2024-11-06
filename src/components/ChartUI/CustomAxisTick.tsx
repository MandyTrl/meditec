import React from "react"

const formatLabel = (label: string) => {
	const words = label.split(" ")

	if (words.length > 1) {
		return (
			<>
				<tspan x="0">{words[0]}</tspan>
				<tspan x="0" dy="1.2em">
					{words.slice(1).join(" ")}
				</tspan>
			</>
		)
	}
	return label
}

type CustomAxisTickProps = {
	x: number
	y: number
	payload: { value: string }
	isMobile?: boolean
}

export const CustomAxisTick: React.FC<CustomAxisTickProps> = ({
	x,
	y,
	payload,
}) => {
	return (
		<g transform={`translate(${x},${y})`}>
			<text textAnchor="middle" fill="#1b4f72" fontSize={15}>
				{formatLabel(payload.value)}
			</text>
		</g>
	)
}
