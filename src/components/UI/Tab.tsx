"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="first:rounded-tl-xl last:rounded-tr-xl bg-white/20 border-t-2 border-secondary md:pt-3 pb-2 md:px-4 hover:bg-white/25 transition-all duration-300 ease-in-out">
			<button onClick={onClick} className="font-medium tracking-widdest">
				{title}
			</button>
		</li>
	)
}
