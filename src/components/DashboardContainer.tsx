import { AppProviders } from "@/utils/Context"
import { TopHospitalsLayout } from "@components/Layout/TopHospitalsLayout"
import { TopHospitalsHeader } from "./TopHospitalHeader"

export const DashboardContainer = () => {
	return (
		<AppProviders>
			<div className="w-full h-full">
				<TopHospitalsHeader />
				<TopHospitalsLayout />
			</div>
		</AppProviders>
	)
}
