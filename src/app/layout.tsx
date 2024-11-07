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

export const metadata: Metadata = {
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
				className={`${krub.className} w-full md:py-4 bg-slate-300/50 text-sky-950`}>
				<Header />

				<main className="px-3 md:px-[8%]">{children}</main>
			</body>
		</html>
	)
}
