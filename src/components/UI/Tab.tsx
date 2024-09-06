"use client"
import React from "react"

export type TabProps = {
	title: string
	onClick: () => void
}

export const Tab = ({ title, onClick }: TabProps) => {
	return (
		<li className="first:rounded-tl-xl last:rounded-tr-xl bg-white/20 border-t-2 border-secondary pt-2 pb-1 px-4 hover:bg-white/25 transition-all duration-300 ease-in-out">
			<button onClick={onClick}>{title}</button>
		</li>
	)
}
