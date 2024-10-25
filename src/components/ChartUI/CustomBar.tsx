import React from "react"

export type CustomBarProps = {
	fill: string
	x: number
	y: number
	customWidth?: number
	width: number
	height: number
}

export const CustomBar: React.FC<CustomBarProps> = ({
	fill,
	x,
	y,
	customWidth,
	width,
	height,
}) => {
	return (
		<g>
			<rect
				x={x}
				y={y - 4}
				width={customWidth ? customWidth : width}
				height={height}
				fill={fill}
				rx={5}
				ry={5}
			/>
		</g>
	)
}
