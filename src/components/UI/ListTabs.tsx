import { Tab } from "@components/UI/Tab"
import { tabs } from "@/utils/Datas/tabs"
import { useHospitalSelected } from "@/utils/Hooks/useHospitalSelected"

export const ListTabs = () => {
	const { hospital, hospitalSelected } = useHospitalSelected()

	return (
		<ul className="w-full md:w-fit flex">
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
