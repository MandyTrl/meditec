import React, { useMemo } from "react"
import { AxisOptions, Chart } from "react-charts"

type DailyStars = {
	date: Date
	stars: number
}

type Series = {
	label: string
	data: DailyStars[]
}

const data: Series[] = [
	{
		label: "Série 1",
		data: [
			{
				date: new Date(),
				stars: 23,
			},
		],
	},
	{
		label: "Série 2",
		data: [
			{
				date: new Date(),
				stars: 16,
			},
		],
	},
	{
		label: "Série 3",
		data: [
			{
				date: new Date(),
				stars: 6,
			},
		],
	},
	{
		label: "Série 4",
		data: [
			{
				date: new Date(),
				stars: 14,
			},
		],
	},
]

export const CustomChart = () => {
	const primaryAxis = useMemo(
		(): AxisOptions<DailyStars> => ({
			getValue: (datum) => datum.date,
		}),
		[]
	)

	const secondaryAxes = useMemo(
		(): AxisOptions<DailyStars>[] => [
			{
				getValue: (datum) => datum.stars,
			},
		],
		[]
	)

	return (
		<Chart
			options={{
				data,
				primaryAxis,
				secondaryAxes,
			}}
			className="flex w-4/5 h-5/6"
		/>
	)
}
