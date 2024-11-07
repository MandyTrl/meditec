import React from "react"
import { ListTabs } from "./UI/ListTabs"
import { dancingScript } from "@/app/layout"

export const Header = () => {
	return (
		<header className="w-full flex justify-between md:py-4 md:px-10">
			<h1 className="w-fit tracking-widder text-xl font-semibold uppercase">
				<span className={`${dancingScript.className} md:text-4xl`}>M</span>
				ed
				<span className="text-sky-500">i</span>tec
			</h1>

			<ListTabs />
		</header>
	)
}
