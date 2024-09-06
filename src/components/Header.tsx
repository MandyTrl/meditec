import React from "react"
import Image from "next/image"
import logo from "@assets/logo.svg"

export const Header = () => {
	return (
		<header className="flex items-center md:h-20 p-10 bg-white/20 rounded-b-2xl border-b-2 border-b-secondary">
			<Image
				className=""
				src={logo}
				alt="Tekkare logo"
				width={300}
				height={0}
				priority
			/>

			<h1 className="text-white tracking-widder text-2xl font-semibold">
				Dashboard
			</h1>
		</header>
	)
}
