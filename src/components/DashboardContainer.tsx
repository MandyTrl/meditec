"use client"
import React from "react"
import { ListTabs } from "@components/UI/ListTabs"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"

export const DashboardContainer = () => {
	return (
		<div className="w-full h-full mt-5 md:mt-20">
			<ListTabs />

			<div className="bg-white/20 p-2 md:p-5 md:rounded-tr-xl">
				<TopHospitalsLayout />
			</div>
		</div>
	)
}
