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
	description: "One dashboard for rule them all.",
	icons: {
		icon: "/assets/logo-meditec.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="fr">
			<body
				className={`${krub.className} w-full md:py-4 bg-slate-300/50 text-tertiary`}>
				<link
					rel="logo-meditec"
					type="image/png"
					href="/assets/logo-meditec.png"
					sizes="32x32"
				/>

				<main className="px-3 md:px-[8%]">
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}
