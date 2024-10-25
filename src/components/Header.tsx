import React from "react"
import { ListTabs } from "./UI/ListTabs"
import { dancingScript } from "@/app/layout"

export const Header = () => {
	return (
		<header className="w-full flex items-end md:justify-between h-12 md:mb-16 border-b border-b-primary">
			<h1 className="w-2/5 md:self-start tracking-widder text-xl font-semibold uppercase">
				<span className={`${dancingScript.className} md:text-4xl`}>M</span>
				ed
				<span className="text-sky-500">i</span>tec
			</h1>

			<ListTabs />
		</header>
	)
}
