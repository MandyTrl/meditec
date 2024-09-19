import React from "react"

type ChartContainerProps = {
	children: React.ReactNode
}

export const ChartContainer = ({ children }: ChartContainerProps) => {
	return (
		<div className="flex-1 w-full mt-2 md:mt-0 bg-white rounded-2xl p-3 md:p-6">
			{children}
		</div>
	)
}
