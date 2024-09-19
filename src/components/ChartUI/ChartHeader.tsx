import React from "react"

type ChartHeaderProps = {
	title: string
}

export const ChartHeader = ({ title }: ChartHeaderProps) => {
	return (
		<div className="mb-8">
			<h4 className="font-bold text-center md:text-left mt-2">{title}</h4>
			<div className="w-full h-[1px] bg-slate-200 mt-2 mb-4"></div>
		</div>
	)
}
