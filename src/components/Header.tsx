import React from "react"
import { ListTabs } from "./UI/ListTabs"
import { dancingScript } from "@/app/layout"

export const Header = () => {
	return (
		<header className="w-full flex items-end md:justify-between h-16 md:h-20 md:mb-16 border-b border-b-primary px-0 md:px-4">
			<h1
				className={`${dancingScript.className} w-2/5 md:self-start tracking-widder md:mt-6 text-3xl md:text-4xl font-semibold`}>
				Med<span className="text-sky-500 normal-case">i</span>tec
			</h1>

			<ListTabs />
		</header>
	)
}
