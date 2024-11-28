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

export const molecules: Molecule[] = [
	{
		name: "Lisinopril",
		description:
			"Inhibiteur de l'enzyme de conversion de l'angiotensine (ECA) utilisé principalement pour traiter l'hypertension artérielle.",
		codeATC: "C09AA03",
		formula: "C21H31N3O5",
		image: "https://example.com/images/lisinopril.jpg",
		medications: [
			{
				name: "Zestril",
				dosage: "10mg",
				priceHistory: [
					{ date: "2023-01-01", priceEUR: 5.49, priceUSD: 6.1 },
					{ date: "2023-05-01", priceEUR: 5.59, priceUSD: 6.2 },
					{ date: "2021-09-01", priceEUR: 5.69, priceUSD: 6.3 },
					{ date: "jan 2022", priceEUR: 5.79, priceUSD: 6.4 },
					{ date: "may 2022", priceEUR: 5.89, priceUSD: 6.5 },
					{ date: "sep 2022", priceEUR: 5.99, priceUSD: 6.6 },
					{ date: "jan 2023", priceEUR: 6.09, priceUSD: 6.7 },
					{ date: "may 2023", priceEUR: 6.19, priceUSD: 6.8 },
					{ date: "sep 2023", priceEUR: 6.29, priceUSD: 6.9 },
				],
			},
			{
				name: "Prinivil",
				dosage: "20mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 7.99, priceUSD: 8.5 },
					{ date: "2021-05-01", priceEUR: 8.09, priceUSD: 8.6 },
					{ date: "2021-09-01", priceEUR: 8.19, priceUSD: 8.7 },
					{ date: "2022-01-01", priceEUR: 8.29, priceUSD: 8.8 },
					{ date: "2022-05-01", priceEUR: 8.39, priceUSD: 8.9 },
					{ date: "2022-09-01", priceEUR: 8.49, priceUSD: 9.0 },
					{ date: "2023-01-01", priceEUR: 8.59, priceUSD: 9.1 },
					{ date: "2023-05-01", priceEUR: 8.69, priceUSD: 9.2 },
					{ date: "2023-09-01", priceEUR: 8.79, priceUSD: 9.3 },
				],
			},
		],
	},
	{
		name: "Metformin",
		description:
			"Antidiabétique oral utilisé pour le traitement du diabète de type 2.",
		codeATC: "A10BA02",
		formula: "C4H11N5",
		image: "https://example.com/images/metformin.jpg",
		medications: [
			{
				name: "Glucophage",
				dosage: "500mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 4.69, priceUSD: 5.1 },
					{ date: "2021-05-01", priceEUR: 4.79, priceUSD: 5.2 },
					{ date: "2021-09-01", priceEUR: 4.89, priceUSD: 5.3 },
					{ date: "2022-01-01", priceEUR: 4.99, priceUSD: 5.4 },
					{ date: "2022-05-01", priceEUR: 5.09, priceUSD: 5.5 },
					{ date: "2022-09-01", priceEUR: 5.19, priceUSD: 5.6 },
					{ date: "2023-01-01", priceEUR: 5.29, priceUSD: 5.7 },
					{ date: "2023-05-01", priceEUR: 5.39, priceUSD: 5.8 },
					{ date: "2023-09-01", priceEUR: 5.49, priceUSD: 5.9 },
				],
			},
			{
				name: "Fortamet",
				dosage: "850mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 9.99, priceUSD: 10.8 },
					{ date: "2021-05-01", priceEUR: 10.09, priceUSD: 10.9 },
					{ date: "2021-09-01", priceEUR: 10.19, priceUSD: 11.0 },
					{ date: "2022-01-01", priceEUR: 10.29, priceUSD: 11.1 },
					{ date: "2022-05-01", priceEUR: 10.39, priceUSD: 11.2 },
					{ date: "2022-09-01", priceEUR: 10.49, priceUSD: 11.3 },
					{ date: "2023-01-01", priceEUR: 10.59, priceUSD: 11.4 },
					{ date: "2023-05-01", priceEUR: 10.69, priceUSD: 11.5 },
					{ date: "2023-09-01", priceEUR: 10.79, priceUSD: 11.6 },
				],
			},
			{
				name: "Glumetza",
				dosage: "1000mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 14.99, priceUSD: 16.2 },
					{ date: "2021-05-01", priceEUR: 15.09, priceUSD: 16.3 },
					{ date: "2021-09-01", priceEUR: 15.19, priceUSD: 16.4 },
					{ date: "2022-01-01", priceEUR: 15.29, priceUSD: 16.5 },
					{ date: "2022-05-01", priceEUR: 15.39, priceUSD: 16.6 },
					{ date: "2022-09-01", priceEUR: 15.49, priceUSD: 16.7 },
					{ date: "2023-01-01", priceEUR: 15.59, priceUSD: 16.8 },
					{ date: "2023-05-01", priceEUR: 15.69, priceUSD: 16.9 },
					{ date: "2023-09-01", priceEUR: 15.79, priceUSD: 17.0 },
				],
			},
		],
	},
	{
		name: "Cetirizine",
		description:
			"Antihistaminique utilisé pour soulager les symptômes des allergies.",
		codeATC: "R06AE07",
		formula: "C21H25ClN2O3",
		image: "https://example.com/images/cetirizine.jpg",
		medications: [
			{
				name: "Zyrtec",
				dosage: "10mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 3.99, priceUSD: 4.3 },
					{ date: "2021-05-01", priceEUR: 4.09, priceUSD: 4.4 },
					{ date: "2021-09-01", priceEUR: 4.19, priceUSD: 4.5 },
					{ date: "2022-01-01", priceEUR: 4.29, priceUSD: 4.6 },
					{ date: "2022-05-01", priceEUR: 4.39, priceUSD: 4.7 },
					{ date: "2022-09-01", priceEUR: 4.49, priceUSD: 4.8 },
					{ date: "2023-01-01", priceEUR: 4.59, priceUSD: 4.9 },
					{ date: "2023-05-01", priceEUR: 4.69, priceUSD: 5.0 },
					{ date: "2023-09-01", priceEUR: 4.79, priceUSD: 5.1 },
				],
			},
		],
	},
	{
		name: "Atorvastatin",
		description: "Statine utilisée pour abaisser les niveaux de cholestérol.",
		codeATC: "C10AA05",
		formula: "C33H35FN2O5",
		image: "atorvastatin.png",
		medications: [
			{
				name: "Lipitor",
				dosage: "10mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 6.49, priceUSD: 6.9 },
					{ date: "2021-05-01", priceEUR: 6.59, priceUSD: 7.0 },
					{ date: "2021-09-01", priceEUR: 6.69, priceUSD: 7.1 },
					{ date: "2022-01-01", priceEUR: 6.79, priceUSD: 7.2 },
					{ date: "2022-05-01", priceEUR: 6.99, priceUSD: 7.5 },
					{ date: "2022-09-01", priceEUR: 6.89, priceUSD: 7.4 },
					{ date: "2023-01-01", priceEUR: 6.79, priceUSD: 7.3 },
					{ date: "2023-05-01", priceEUR: 6.69, priceUSD: 7.2 },
					{ date: "2023-09-01", priceEUR: 6.79, priceUSD: 7.3 },
				],
			},
			{
				name: "Torvast",
				dosage: "20mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 9.49, priceUSD: 10.2 },
					{ date: "2021-05-01", priceEUR: 9.59, priceUSD: 10.3 },
					{ date: "2021-09-01", priceEUR: 9.79, priceUSD: 10.5 },
					{ date: "2022-01-01", priceEUR: 9.89, priceUSD: 10.6 },
					{ date: "2022-05-01", priceEUR: 9.99, priceUSD: 10.7 },
					{ date: "2022-09-01", priceEUR: 9.89, priceUSD: 10.6 },
					{ date: "2023-01-01", priceEUR: 9.79, priceUSD: 10.5 },
					{ date: "2023-05-01", priceEUR: 9.69, priceUSD: 10.4 },
					{ date: "2023-09-01", priceEUR: 9.79, priceUSD: 10.5 },
				],
			},
			{
				name: "Sortis",
				dosage: "40mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 7.79, priceUSD: 8.4 },
					{ date: "2021-05-01", priceEUR: 7.89, priceUSD: 8.5 },
					{ date: "2021-09-01", priceEUR: 8.09, priceUSD: 8.6 },
					{ date: "2022-01-01", priceEUR: 8.19, priceUSD: 8.7 },
					{ date: "2022-05-01", priceEUR: 8.29, priceUSD: 8.8 },
					{ date: "2022-09-01", priceEUR: 8.19, priceUSD: 8.7 },
					{ date: "2023-01-01", priceEUR: 8.09, priceUSD: 8.6 },
					{ date: "2023-05-01", priceEUR: 8.19, priceUSD: 8.7 },
					{ date: "2023-09-01", priceEUR: 8.29, priceUSD: 8.8 },
				],
			},
		],
	},
	{
		name: "Omeprazole",
		description:
			"Inhibiteur de la pompe à protons utilisé pour traiter les ulcères gastriques et le reflux gastro-œsophagien.",
		codeATC: "A02BC01",
		formula: "C17H19N3O3S",
		image: "omeprazole.png",
		medications: [
			{
				name: "Prilosec",
				dosage: "20mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 9.79, priceUSD: 10.6 },
					{ date: "2021-05-01", priceEUR: 9.89, priceUSD: 10.7 },
					{ date: "2021-09-01", priceEUR: 9.99, priceUSD: 10.8 },
					{ date: "2022-01-01", priceEUR: 10.09, priceUSD: 10.9 },
					{ date: "2022-05-01", priceEUR: 10.19, priceUSD: 11.0 },
					{ date: "2022-09-01", priceEUR: 10.09, priceUSD: 10.9 },
					{ date: "2023-01-01", priceEUR: 9.99, priceUSD: 10.8 },
					{ date: "2023-05-01", priceEUR: 10.09, priceUSD: 10.9 },
					{ date: "2023-09-01", priceEUR: 10.19, priceUSD: 11.0 },
				],
			},
			{
				name: "Losec",
				dosage: "40mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 14.79, priceUSD: 15.9 },
					{ date: "2021-05-01", priceEUR: 14.89, priceUSD: 16.0 },
					{ date: "2021-09-01", priceEUR: 14.99, priceUSD: 16.2 },
					{ date: "2022-01-01", priceEUR: 15.09, priceUSD: 16.3 },
					{ date: "2022-05-01", priceEUR: 15.19, priceUSD: 16.4 },
					{ date: "2022-09-01", priceEUR: 15.09, priceUSD: 16.3 },
					{ date: "2023-01-01", priceEUR: 15.19, priceUSD: 16.4 },
					{ date: "2023-05-01", priceEUR: 15.09, priceUSD: 16.3 },
					{ date: "2023-09-01", priceEUR: 15.19, priceUSD: 16.4 },
				],
			},
		],
	},
	{
		name: "Amlodipine",
		description:
			"Bloqueur des canaux calciques utilisé pour traiter l'hypertension et l'angine de poitrine.",
		codeATC: "C08CA01",
		formula: "C20H25ClN2O5.C6H6O3S",
		image: "amlodipine.png",
		medications: [
			{
				name: "Norvasc",
				dosage: "5mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 18.79, priceUSD: 20.3 },
					{ date: "2021-05-01", priceEUR: 18.89, priceUSD: 20.4 },
					{ date: "2021-09-01", priceEUR: 18.99, priceUSD: 20.5 },
					{ date: "2022-01-01", priceEUR: 19.09, priceUSD: 20.6 },
					{ date: "2022-05-01", priceEUR: 19.19, priceUSD: 20.7 },
					{ date: "2022-09-01", priceEUR: 19.09, priceUSD: 20.6 },
					{ date: "2023-01-01", priceEUR: 19.19, priceUSD: 20.7 },
					{ date: "2023-05-01", priceEUR: 19.09, priceUSD: 20.6 },
					{ date: "2023-09-01", priceEUR: 19.19, priceUSD: 20.7 },
				],
			},
			{
				name: "Amlor",
				dosage: "10mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 15.79, priceUSD: 17.0 },
					{ date: "2021-05-01", priceEUR: 15.89, priceUSD: 17.1 },
					{ date: "2021-09-01", priceEUR: 15.99, priceUSD: 17.2 },
					{ date: "2022-01-01", priceEUR: 16.09, priceUSD: 17.3 },
					{ date: "2022-05-01", priceEUR: 16.19, priceUSD: 17.4 },
					{ date: "2022-09-01", priceEUR: 16.09, priceUSD: 17.3 },
					{ date: "2023-01-01", priceEUR: 16.19, priceUSD: 17.4 },
					{ date: "2023-05-01", priceEUR: 16.09, priceUSD: 17.3 },
					{ date: "2023-09-01", priceEUR: 16.19, priceUSD: 17.4 },
				],
			},
		],
	},
	{
		name: "Fluoxetine",
		description:
			"Antidépresseur utilisé pour traiter la dépression et les TOC.",
		codeATC: "N06AB03",
		formula: "C17H18F3NO",
		image: "https://example.com/images/fluoxetine.jpg",
		medications: [
			{
				name: "Prozac",
				dosage: "20mg",
				priceHistory: [
					{ date: "2021-01-01", priceEUR: 12.99, priceUSD: 14.5 },
					{ date: "2021-05-01", priceEUR: 13.09, priceUSD: 14.6 },
					{ date: "2021-09-01", priceEUR: 13.19, priceUSD: 14.7 },
					{ date: "2022-01-01", priceEUR: 13.29, priceUSD: 14.8 },
					{ date: "2022-05-01", priceEUR: 13.19, priceUSD: 14.7 },
					{ date: "2022-09-01", priceEUR: 13.09, priceUSD: 14.6 },
					{ date: "2023-01-01", priceEUR: 13.19, priceUSD: 14.7 },
					{ date: "2023-05-01", priceEUR: 13.29, priceUSD: 14.8 },
					{ date: "2023-09-01", priceEUR: 13.39, priceUSD: 14.9 },
				],
			},
		],
	},
]
