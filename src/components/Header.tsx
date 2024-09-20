"use client"
import React from "react"
import { ListTabs } from "./UI/ListTabs"
import { dancingScript } from "@/app/layout"

export const Header = () => {
	return (
		<header className="w-full flex flex-col md:flex-row items-center justify-between my-4 md:h-20 p-3 md:p-10 bg-white/50 rounded-2xl shadow">
			<h1
				className={`${dancingScript.className} tracking-widder text-3xl md:text-4xl font-semibold`}>
				Med<span className="text-sky-500 normal-case">i</span>tec
			</h1>

			<ListTabs />
		</header>
	)
}
