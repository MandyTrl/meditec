"use client"
import { Tab } from "@components/UI/Tab"
import { tabs } from "@/utils/data/tabs"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"

export const ListTabs = () => {
	const { hospital, hospitalSelected } = useHospitalSelected()

	return (
		<ul className="w-full md:w-fit flex gap-2 rounded-full bg-white/20">
			{tabs.map((title: string) => {
				const titleToRender = hospitalSelected ? hospital[0].name : title

				return (
					<Tab
						key={titleToRender}
						title={titleToRender}
						onClick={() => console.log("test")}
					/>
				)
			})}
		</ul>
	)
}
