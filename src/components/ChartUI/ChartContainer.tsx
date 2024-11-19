import React from "react"
import clsx from "clsx"
// import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"

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
	// const { hospitalSelected } = useHospitalSelected()

	return (
		<div
			className={clsx(
				dark
					? "bg-tertiary text-white"
					: transparent
					? "bg-transparent border border-primary"
					: "bg-white",
				// hospitalSelected ? "h-fit" : "h-full",
				"w-full min-w-[200px] h-fit overflow-hidden flex flex-col items-center mt-2 md:mt-0 rounded-lg p-4 opacity-90 hover:opacity-100 ease-in-out duration-150 transition-all"
			)}>
			{children}
		</div>
	)
}
