"use client"
import { Tab } from "@components/UI/Tab"
import { tabs } from "@/utils/data/tabs"

export const ListTabs = () => {
	return (
		<ul className="flex w-fit justify-self-end bg-white rounded-full p-2">
			{tabs.map((title: string) => {
				return (
					<Tab key={title} title={title} onClick={() => console.log("test")} />
				)
			})}
		</ul>
	)
}
