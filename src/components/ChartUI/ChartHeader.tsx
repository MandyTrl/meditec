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
			<div className="flex flex-col">
				<div className="flex items-center flex-1">
					<Image alt="" src={icon} className="w-5 h-5 fill-primary mr-1" />
					<h3 className="font-semibold">{title}</h3>
				</div>

				<p className="text-sm italic">{description}</p>
			</div>

			<div className="w-full h-[1px] bg-primary/20 mt-4 mb-6"></div>
		</div>
	)
}
