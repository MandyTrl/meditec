import React from "react"

type CustomLabelProps = {
	x: number
	y: number
	width: number
	value: string
}

export const CustomTextLabel = ({ x, y, width, value }: CustomLabelProps) => {
	return (
		<text
			x={x + width / 2} //centre le label
			y={y}
			dy={-10} //distance entre la barre et le label
			fill="#1b4f72"
			fontSize={18}
			textAnchor="middle">
			{value}
		</text>
	)
}
