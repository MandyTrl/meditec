import { createContext } from "react"
import { topHospitals } from "@utils/data/hospitals/hospitals"
import { Hospital } from "@utils/data/hospitals/hospitalsTypes"

export type HospitalContextProps = {
	hospital: Hospital[]
	handleHospital: (hospitalSelected: string) => void
}

export const HospitalContext = createContext<HospitalContextProps>({
	hospital: topHospitals,
	handleHospital: () => {},
})
