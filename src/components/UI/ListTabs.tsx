"use client"
import { Tab } from "@components/UI/Tab"
import { tabs } from "@/utils/data/tabs"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"

export const ListTabs = () => {
	const { hospital, hospitalSelected } = useHospitalSelected()

	return (
		<ul className="flex w-fit justify-self-end">
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
