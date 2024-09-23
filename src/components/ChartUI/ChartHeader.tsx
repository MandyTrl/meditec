import React from "react"
import Image from "next/image"

type ChartHeaderProps = {
	title: string
	icon: string
	description?: string
}

export const ChartHeader = ({ title, icon, description }: ChartHeaderProps) => {
	return (
		<div className="mb-8">
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 flex items-center justify-center p-2 bg-slate-300 rounded shadow-sm">
					<Image alt="" src={icon} className="w-full" />
				</div>
				<div className="flex-1 text-left">
					<h3 className="font-bold">{title}</h3>
					<p className="text-sm">{description}</p>
				</div>
			</div>

			<div className="w-full h-[1px] bg-primary/20 my-4"></div>
		</div>
	)
}
