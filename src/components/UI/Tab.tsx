"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="z-10 w-fit flex items-center justify-center transition-all duration-300 ease-in-out border-b border-transparent hover:border-sky-500 transition-all ease-in-out duration-300 font-medium tracking-widdest -my-[1px] md:pb-2">
			<button onClick={onClick}>{title}</button>
		</li>
	)
}
