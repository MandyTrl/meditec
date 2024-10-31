import React from "react"
import Image from "next/image"

type ChartHeaderProps = {
	title: string
	icon: string
	description?: string
}

export const ChartHeader = ({ title, icon, description }: ChartHeaderProps) => {
	return (
		<div>
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 flex items-center justify-center p-2 bg-slate-300 rounded-lg shadow-sm">
					<Image alt="" src={icon} className="w-full fill-primary" />
				</div>
				<div className="flex-1 text-left">
					<h3 className="font-semibold">{title}</h3>
					<p className="text-sm">{description}</p>
				</div>
			</div>

			<div className="w-full h-[1px] bg-primary/20 mt-4 mb-6"></div>
		</div>
	)
}
