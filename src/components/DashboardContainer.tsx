import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { TopHospitalsHeader } from "./TopHospitalHeader"

export const DashboardContainer = () => {
	return (
		<div className="w-full h-full">
			<TopHospitalsHeader />
			<TopHospitalsLayout />
		</div>
	)
}
