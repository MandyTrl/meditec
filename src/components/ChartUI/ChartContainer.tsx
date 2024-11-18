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
				// hospitalSelected ? "h-fit" : "h-full",
				"w-full min-w-[200px] max-h-[600px] h-fit overflow-hidden flex flex-col items-center mt-2 md:mt-0 rounded-2xl p-4"
			)}>
			<div className="w-full h-full overflow-y-auto rounded-2xl">
				{children}
			</div>
		</div>
	)
}
