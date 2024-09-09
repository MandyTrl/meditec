import { useContext } from "react"
import { HospitalContext, HospitalContextProps } from "@utils/Context/index"
import { topHospitals } from "@utils/Datas/hospitals"

export const useHospitalSelected = () => {
	const hospitalCtxt: HospitalContextProps = useContext(HospitalContext)
	if (!hospitalCtxt) {
		console.error("Hospital context is not available.")
		return { hospital: topHospitals, hospitalSelected: false }
	}

	const { hospital } = hospitalCtxt

	const hospitalSelected = hospital.length > 1 ? false : true

	return { hospital, hospitalSelected }
}
