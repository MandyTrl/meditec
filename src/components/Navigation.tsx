"use client"
import { useContext, useState } from "react"
import Image from "next/image"
import { DashboardsContext } from "@/utils/Context"
import { tabs } from "@/utils/data/tabs"
import { ListTabs } from "./UI/ListTabs"
import { useBreakpoint } from "@/utils/hooks/useBP"
import menuIcon from "@assets/icons/hamburger.svg"
import tabIcon from "@assets/icons/arrow.png"

export const Navigtation = () => {
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"

	const dashboardCtxt = useContext(DashboardsContext)
	const { dashboard, handleDashboard } = dashboardCtxt

	const handleSelectTab = (tabSelected: string) => {
		handleDashboard(tabSelected)
	}

	const [isOpen, setOpen] = useState(false)

	return isMobile ? (
		<div className="w-full h-full flex flex-col p-5 items-end w-full absolute top-0 right-0">
			{isOpen ? (
				<button onClick={() => setOpen(false)} className="text-3xl font-bold">
					x
				</button>
			) : (
				<button onClick={() => setOpen((prevState) => !prevState)}>
					<Image
						src={menuIcon}
						alt="menu-icon"
						width={30}
						height={30}
						className="self-end"
					/>
				</button>
			)}

			{isOpen && (
				<div className="flex flex-col w-[80%] h-screen bg-[#D5DDE6] absolute top-0 left-0 p-4 flex items-start drop-shadow z-30">
					<p className="font-semibold text-sm mb-3">Select a dashboard</p>

					<ul className="w-full flex flex-col divide-y divide-jinx/50">
						{tabs.map((tab: string) => {
							return (
								<li
									key={tab}
									className="w-full flex items-center transition-color ease-in-out duration-150 hover:text-jinx py-3"
									onClick={() => handleSelectTab(tab)}>
									<p>{tab}</p>
									<Image
										src={tabIcon}
										alt="menu-icon"
										width={14}
										height={14}
										className="ml-2 rotate-90"
									/>
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	) : (
		<ListTabs dashboard={dashboard} handleSelectTab={handleSelectTab} />
	)
}
