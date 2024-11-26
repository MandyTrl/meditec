"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="z-10 w-fit flex items-center justify-center transition-all duration-300 ease-in-out rounded-full px-2 py-1 bg-transparent hover:bg-secondary/80 transition-all ease-in-out duration-300 font-medium tracking-widdest">
			<button onClick={onClick}>{title}</button>
		</li>
	)
}
