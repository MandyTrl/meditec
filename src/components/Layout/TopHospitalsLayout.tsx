import React from "react"
import { useHospitalSelected } from "@/utils/hooks/useHospitalSelected"
import { useBreakpoint } from "@/utils/hooks/useBP"
import { HospitalSelectedLayout } from "@components/Layout/HospitalSelectedLayout"
import { OverviewLayout } from "@components/Layout/OverviewLayout"

export const TopHospitalsLayout = () => {
	const { hospitalSelected } = useHospitalSelected()
	const breakpoint = useBreakpoint()
	const isMobile = breakpoint === "mobile"

	return !hospitalSelected ? (
		<OverviewLayout />
	) : (
		<HospitalSelectedLayout isMobile={isMobile} />
	)
}
