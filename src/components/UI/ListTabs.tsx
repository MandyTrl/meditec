import { tabs } from "@/utils/tabs"
import { Tab } from "@components/UI/Tab"

export const ListTabs = () => {
	return (
		<ul className="w-full md:w-fit flex">
			{tabs.map((title: string) => {
				return (
					<Tab key={title} title={title} onClick={() => console.log("test")} />
				)
			})}
		</ul>
	)
}
