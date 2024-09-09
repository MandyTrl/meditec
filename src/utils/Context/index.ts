import { createContext } from "react"
import { Hospital, topHospitals } from "@utils/data/hospitals"

export type HospitalContextProps = {
	hospital: Hospital[]
	handleHospital: (hospitalSelected: string) => void
}

export const HospitalContext = createContext<HospitalContextProps>({
	hospital: topHospitals,
	handleHospital: () => {},
})
