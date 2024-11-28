"use client"
import { useContext } from "react"
import { DashboardsContext } from "@/utils/Context"
import { DashboardIntro } from "./DashboardIntro"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { MoleculesLayout } from "./Layout/MoleculesLayout"

export const DashboardContainer = () => {
	const dashboardCtxt = useContext(DashboardsContext)
	const { dashboard } = dashboardCtxt
	const hospitalDashboard = dashboard === "Hospitals Performances"

	return (
		<div className="w-full h-full">
			<DashboardIntro />
			{hospitalDashboard ? <TopHospitalsLayout /> : <MoleculesLayout />}
		</div>
	)
}
