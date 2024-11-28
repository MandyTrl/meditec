type PriceHistory = {
	date: string
	priceEUR: number
	priceUSD: number
}

type Medication = {
	name: string
	dosage: string
	priceHistory: PriceHistory[]
}

type Molecule = {
	name: string
	description: string
	codeATC: string
	formula: string
	image: string
	medications: Medication[]
}

export type { Molecule, Medication, PriceHistory }
