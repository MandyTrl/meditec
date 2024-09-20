import React from "react"
import clsx from "clsx"

type ChartContainerProps = {
	children: React.ReactNode
	dark?: boolean
}

export const ChartContainer = ({ children, dark }: ChartContainerProps) => {
	return (
		<div
			className={clsx(
				dark ? "bg-[#051f30] text-white" : "bg-white",
				"flex-1 w-full mt-2 md:mt-0 rounded-2xl p-3 md:p-6"
			)}>
			{children}
		</div>
	)
}
