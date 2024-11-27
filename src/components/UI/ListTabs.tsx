"use client"
import { useContext } from "react"
import { Tab } from "@components/UI/Tab"
import { tabs } from "@/utils/data/tabs"
import { DashboardsContext } from "@/utils/Context"

export const ListTabs = () => {
	const dashboardCtxt = useContext(DashboardsContext)
	const { dashboard, handleDashboard } = dashboardCtxt

	const handleSelectTab = (tabSelected: string) => {
		handleDashboard(tabSelected)
	}

	return (
		<ul className="flex w-fit justify-self-end bg-white rounded-full">
			{tabs.map((title: string) => {
				return (
					<Tab
						key={title}
						title={title}
						dashboardSelected={dashboard}
						onClick={handleSelectTab}
					/>
				)
			})}
		</ul>
	)
}
