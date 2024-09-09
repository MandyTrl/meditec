"use client"
import { useState, useEffect } from "react"

type BreakpointName = "mobile" | "tablet" | "desktop" | "largeScreen"

type BreakpointProps = {
	name: BreakpointName
	min: number
	max: number
}

type UseBreakpointType = () => BreakpointName

const DefaultBreakpoints: BreakpointProps[] = [
	{ name: "mobile", min: 320, max: 600 },
	{ name: "tablet", min: 768, max: 1023 },
	{ name: "desktop", min: 1024, max: 1279 },
	{ name: "largeScreen", min: 1280, max: 1535 },
]

export const useBreakpoint: UseBreakpointType = () => {
	const [breakpoint, setBreakPoint] = useState<BreakpointName>("largeScreen")

	useEffect(() => {
		function handleResize() {
			const windowSize = window.innerWidth

			for (const bp of DefaultBreakpoints) {
				if (windowSize > bp.min && windowSize <= bp.max) {
					setBreakPoint(bp.name)
				}
			}
		}

		window.addEventListener("resize", handleResize)

		handleResize()

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return breakpoint
}
