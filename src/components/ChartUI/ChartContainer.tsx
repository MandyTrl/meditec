import React from "react"
import clsx from "clsx"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"

type ChartContainerProps = {
	children: React.ReactNode
	dark?: boolean
	transparent?: boolean
}

export const ChartContainer = ({
	children,
	dark,
	transparent,
}: ChartContainerProps) => {
	const { hospitalSelected } = useHospitalSelected()

	return (
		<div
			className={clsx(
				dark
					? "bg-tertiary text-white"
					: transparent
					? "bg-transparent"
					: "bg-white",
				hospitalSelected ? "h-fit" : "h-full",
				"w-full min-w-[340px] h-fit flex-auto mt-2 md:mt-0 rounded-2xl p-4 md:p-8 pb-8"
			)}>
			{children}
		</div>
	)
}
