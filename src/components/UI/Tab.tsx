"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="w-full first:rounded-tl-xl last:rounded-tr-xl bg-white/20 border-t-2 border-secondary pt-3 pb-5 md:pb-2 px-4 transition-all duration-300 ease-in-out">
			<button onClick={onClick} className="font-medium tracking-widdest">
				{title}
			</button>
		</li>
	)
}
