import type { Metadata } from "next"
import { Krub } from "next/font/google"
import "./globals.css"
import { Header } from "@components/Header"

const krub = Krub({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
	title: "Tekkare Dashboard",
	description: "Tekkare's tecnical test",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body className={`${krub.className} px-3 md:px-12`}>
				<Header />

				{children}
			</body>
		</html>
	)
}
