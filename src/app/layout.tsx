import type { Metadata } from "next"
import { Krub, Dancing_Script } from "next/font/google"
import "./globals.css"
import { Header } from "@components/Header"

export const krub = Krub({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700"],
})
export const dancingScript = Dancing_Script({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

const metadata: Metadata = {
	title: "Meditec Dashboard",
	description: "Admin dashboard for medical data visualization",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body
				className={`${krub.className} w-full px-3 md:px-20 bg-slate-300 text-sky-950`}>
				<Header />

				{children}
			</body>
		</html>
	)
}
