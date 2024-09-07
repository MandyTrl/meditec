"use client"
import React from "react"
import { ListTabs } from "@components/UI/ListTabs"
import { CustomChart } from "@components/CustomChart"

export const Dashboard = () => {
	return (
		<div className="w-full h-full md:mt-20">
			<ListTabs />

			<div className="bg-white/20 p-5 rounded-tr-xl">
				<CustomChart />
			</div>
		</div>
	)
}
