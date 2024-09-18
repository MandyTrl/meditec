import React from "react"
import { ListTabs } from "./UI/ListTabs"

export const Header = () => {
	return (
		<header className="flex flex-col md:flex-row items-center justify-between my-4 md:h-20 p-3 md:p-10 bg-white/20 rounded-2xl shadow">
			<h1 className="tracking-widder uppercase text-2xl md:text-3xl font-semibold">
				Med<span className="text-sky-500 normal-case">i</span>tec{" "}
				<span className="text-lg md:xl normal-case">Dashboard</span>
			</h1>

			<ListTabs />
		</header>
	)
}
