import React from "react"
import Image from "next/image"
import { ListTabs } from "./UI/ListTabs"
import logo from "@assets/logo-meditec-gray.png"

export const Header = () => {
	return (
		<header className="w-full flex items-center justify-between md:my-6">
			<Image src={logo} alt={"logo-meditec"} className="w-28 h-28" />
			<ListTabs />
		</header>
	)
}
