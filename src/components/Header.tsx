import React from "react"
import Image from "next/image"
import logo from "@assets/logo.svg"

export const Header = () => {
	return (
		<header className="flex flex-col md:flex-row items-center md:h-20 p-3 md:p-10 bg-white/20 rounded-b-2xl border-b-2 border-b-secondary">
			<Image
				src={logo}
				alt="Tekkare logo"
				width={300}
				height={0}
				priority
				className="w-[200px] md:w-[300px]"
			/>

			<h1 className="text-white tracking-widder text-xl md:text-2xl font-semibold">
				Dashboard
			</h1>
		</header>
	)
}
