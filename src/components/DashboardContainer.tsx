"use client"
import React from "react"
import { ListTabs } from "@components/UI/ListTabs"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { Hospitalizations } from "./TopHospitals/Hospitalizations"

export const DashboardContainer = () => {
	return (
		<div className="w-full h-full mt-5 md:mt-20">
			<ListTabs />

			<div className="flex flex-col md:flex-row items-start bg-white/20 p-2 md:p-5 rounded-xl md:rounded-tl-none">
				<TopHospitalsLayout />
				<Hospitalizations />
			</div>
		</div>
	)
}
