import React from "react"
import Image from "next/image"

type ChartHeaderProps = {
	title: string
	icon: string
	description?: string
}

export const ChartHeader = ({ title, icon, description }: ChartHeaderProps) => {
	return (
		<div className="w-full">
			<div className="flex flex-col">
				<div className="w-fit flex items-center flex-1">
					<Image alt="" src={icon} className="w-4 h-4 fill-primary mr-[5px]" />
					<h3 className="font-semibold">{title}</h3>
				</div>

				<p className="text-sm italic">{description}</p>
			</div>

			<div className="w-full h-[1px] bg-primary/20 mt-4 mb-6"></div>
		</div>
	)
}
