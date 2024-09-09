import { tabs } from "@/utils/Datas/tabs"
import { Tab } from "@components/UI/Tab"
import { HospitalContext } from "@/utils/Context"
import { useContext } from "react"

export const ListTabs = () => {
	const hospitalCtxt = useContext(HospitalContext)
	const { hospital } = hospitalCtxt

	return (
		<ul className="w-full md:w-fit flex">
			{tabs.map((title: string) => {
				const titleToRender = !Array.isArray(hospital) ? hospital.name : title

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
