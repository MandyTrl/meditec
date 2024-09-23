"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="w-full flex items-center justify-center rounded-full bg-white/20 p-3 md:py-2 px-4 transition-all duration-300 ease-in-out border hover:border-white/50 transition-all ease-in-out duration-300 font-medium tracking-widdest">
			<button onClick={onClick} className="text-center w-full h-full">
				{title}
			</button>
		</li>
	)
}
