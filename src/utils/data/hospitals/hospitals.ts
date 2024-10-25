import { DepartmentSummary, Hospital, ResumeHospital } from "./hospitalsTypes"

const topHospitals: Hospital[] = [
	{
		name: "Hôpital Saint-Jean",
		location: "Paris, France",
		overview: {
			totalPatients: 12345,
			satisfactionRate: 89,
			totalTreatments: 8765,
			numberOfDoctors: 150,
			numberOfNurses: 300,
		},
		monthlyHospitalizations: [
			{ month: "Jan", year: 2022, value: 1800 },
			{ month: "Feb", year: 2022, value: 1200 },
			{ month: "Mar", year: 2022, value: 1280 },
			{ month: "Apr", year: 2022, value: 1360 },
			{ month: "May", year: 2022, value: 900 },
			{ month: "Jun", year: 2022, value: 1560 },
			{ month: "Jul", year: 2022, value: 980 },
			{ month: "Aug", year: 2022, value: 1100 },
			{ month: "Sep", year: 2022, value: 1760 },
			{ month: "Oct", year: 2022, value: 1800 },
			{ month: "Nov", year: 2022, value: 1500 },
			{ month: "Dec", year: 2022, value: 1700 },
			{ month: "Jan", year: 2023, value: 1500 },
			{ month: "Feb", year: 2023, value: 1600 },
			{ month: "Mar", year: 2023, value: 1700 },
			{ month: "Apr", year: 2023, value: 1800 },
			{ month: "May", year: 2023, value: 1900 },
			{ month: "Jun", year: 2023, value: 2000 },
			{ month: "Jul", year: 2023, value: 2100 },
			{ month: "Aug", year: 2023, value: 2200 },
			{ month: "Sep", year: 2023, value: 2300 },
			{ month: "Oct", year: 2023, value: 2400 },
			{ month: "Nov", year: 2023, value: 2500 },
			{ month: "Dec", year: 2023, value: 2600 },
			{ month: "Jan", year: 2024, value: 1500 },
			{ month: "Feb", year: 2024, value: 1600 },
			{ month: "Mar", year: 2024, value: 1700 },
			{ month: "Apr", year: 2024, value: 1800 },
			{ month: "May", year: 2024, value: 1900 },
			{ month: "Jun", year: 2024, value: 2000 },
			{ month: "Jul", year: 2024, value: 2100 },
			{ month: "Aug", year: 2024, value: 2200 },
			{ month: "Sep", year: 2024, value: 2380 },
			{ month: "Oct", year: 2024, value: 2500 },
		],
		doctorSpecialties: [
			{
				specialty: "Cardiologie",
				numberOfDoctors: 120,
				satisfactionRate: 89,
			},
			{
				specialty: "Neurologie",
				numberOfDoctors: 80,
				satisfactionRate: 80,
			},
			{
				specialty: "Oncologie",
				numberOfDoctors: 60,
				satisfactionRate: 70,
			},
			{
				specialty: "Pédiatrie",
				numberOfDoctors: 90,
				satisfactionRate: 60,
			},
			{
				specialty: "Médecine Générale",
				numberOfDoctors: 150,
				satisfactionRate: 90,
			},
		],
		clinicalTrials: [
			{
				name: "Étude sur les Anticoagulants",
				status: "En cours",
				startDate: "2022-06-15",
				endDate: "2024-06-15",
				totalPatients: 420,
			},
			{
				name: "Essai Cardio-Rénal",
				status: "Terminé",
				startDate: "2022-08-01",
				endDate: "2023-02-28",
				totalPatients: 180,
			},
			{
				name: "Étude Longue Durée sur le Diabète",
				status: "En cours",
				startDate: "2023-01-01",
				endDate: "2025-06-30",
				totalPatients: 234,
			},
			{
				name: "Test d'Immunothérapie",
				status: "Terminé",
				startDate: "2023-01-01",
				endDate: "2023-06-30",
				totalPatients: 349,
			},
			{
				name: "Thérapie Cellulaire en Oncologie",
				status: "Terminé",
				startDate: "2023-01-01",
				endDate: "2023-06-30",
				totalPatients: 1289,
			},
			{
				name: "Étude sur les Cellules Souches",
				status: "En cours",
				startDate: "2023-04-01",
				endDate: "2024-12-30",
				totalPatients: 978,
			},
		],
		hospitalDepartments: [
			{
				department: "Neurologie",
				patientsPerDay: 60,
				averageWaitTime: 35,
			},
			{
				department: "Cardiologie",
				patientsPerDay: 80,
				averageWaitTime: 30,
			},
			{
				department: "Urgences",
				patientsPerDay: 150,
				averageWaitTime: 45,
			},
			{
				department: "Pédiatrie",
				patientsPerDay: 50,
				averageWaitTime: 40,
			},
		],
	},
	{
		name: "Hôpital Lumière",
		location: "Lyon, France",
		overview: {
			totalPatients: 9800,
			satisfactionRate: 85,
			totalTreatments: 7400,
			numberOfDoctors: 130,
			numberOfNurses: 250,
		},
		monthlyHospitalizations: [
			{ month: "Jan", year: 2022, value: 2200 },
			{ month: "Feb", year: 2022, value: 1700 },
			{ month: "Mar", year: 2022, value: 1580 },
			{ month: "Apr", year: 2022, value: 1400 },
			{ month: "May", year: 2022, value: 1780 },
			{ month: "Jun", year: 2022, value: 1060 },
			{ month: "Jul", year: 2022, value: 1100 },
			{ month: "Aug", year: 2022, value: 840 },
			{ month: "Sep", year: 2022, value: 2230 },
			{ month: "Oct", year: 2022, value: 1990 },
			{ month: "Nov", year: 2022, value: 1780 },
			{ month: "Dec", year: 2022, value: 1400 },
			{ month: "Jan", year: 2023, value: 1200 },
			{ month: "Feb", year: 2023, value: 1300 },
			{ month: "Mar", year: 2023, value: 1400 },
			{ month: "Apr", year: 2023, value: 1500 },
			{ month: "May", year: 2023, value: 1600 },
			{ month: "Jun", year: 2023, value: 1700 },
			{ month: "Jul", year: 2023, value: 1800 },
			{ month: "Aug", year: 2023, value: 1900 },
			{ month: "Sep", year: 2023, value: 2000 },
			{ month: "Oct", year: 2023, value: 2100 },
			{ month: "Nov", year: 2023, value: 2200 },
			{ month: "Dec", year: 2023, value: 2300 },
			{ month: "Jan", year: 2024, value: 1200 },
			{ month: "Feb", year: 2024, value: 1300 },
			{ month: "Mar", year: 2024, value: 1400 },
			{ month: "Apr", year: 2024, value: 1500 },
			{ month: "May", year: 2024, value: 1600 },
			{ month: "Jun", year: 2024, value: 1700 },
			{ month: "Jul", year: 2024, value: 1800 },
			{ month: "Aug", year: 2024, value: 1900 },
			{ month: "Sep", year: 2024, value: 1800 },
			{ month: "Oct", year: 2024, value: 2220 },
		],
		doctorSpecialties: [
			{
				specialty: "Cardiologie",
				numberOfDoctors: 110,
				satisfactionRate: 87,
			},
			{
				specialty: "Neurologie",
				numberOfDoctors: 75,
				satisfactionRate: 78,
			},
			{
				specialty: "Oncologie",
				numberOfDoctors: 65,
				satisfactionRate: 72,
			},
			{
				specialty: "Pédiatrie",
				numberOfDoctors: 85,
				satisfactionRate: 63,
			},
			{
				specialty: "Médecine Générale",
				numberOfDoctors: 140,
				satisfactionRate: 88,
			},
		],
		clinicalTrials: [
			{
				name: "Essai Thérapie Génétique",
				status: "En cours",
				startDate: "2022-09-20",
				endDate: "2024-10-20",
				totalPatients: 350,
			},
			{
				name: "Programme Réhabilitation Pulmonaire",
				status: "Terminé",
				startDate: "2022-10-05",
				endDate: "2023-03-31",
				totalPatients: 450,
			},
			{
				name: "Essai Médical A",
				status: "En cours",
				startDate: "2023-02-01",
				endDate: "2025-01-31",
				totalPatients: 250,
			},
			{
				name: "Test de Vaccin",
				status: "Terminé",
				startDate: "2023-02-01",
				endDate: "2023-07-31",
				totalPatients: 360,
			},
			{
				name: "Essai de Réduction de Douleur Chronique",
				status: "Terminé",
				startDate: "2023-02-01",
				endDate: "2023-07-31",
				totalPatients: 1300,
			},
			{
				name: "Étude sur l'Épilepsie",
				status: "En cours",
				startDate: "2023-02-01",
				endDate: "2024-11-30",
				totalPatients: 990,
			},
		],
		hospitalDepartments: [
			{
				department: "Urgences",
				patientsPerDay: 140,
				averageWaitTime: 50,
			},
			{
				department: "Cardiologie",
				patientsPerDay: 45,
				averageWaitTime: 25,
			},
			{
				department: "Neurologie",
				patientsPerDay: 25,
				averageWaitTime: 40,
			},
			{
				department: "Pédiatrie",
				patientsPerDay: 67,
				averageWaitTime: 25,
			},
		],
	},
	{
		name: "Hôpital du Midi",
		location: "Marseille, France",
		overview: {
			totalPatients: 11500,
			satisfactionRate: 90,
			totalTreatments: 8000,
			numberOfDoctors: 140,
			numberOfNurses: 280,
		},
		monthlyHospitalizations: [
			{ month: "Jan", year: 2022, value: 1200 },
			{ month: "Feb", year: 2022, value: 1550 },
			{ month: "Mar", year: 2022, value: 1690 },
			{ month: "Apr", year: 2022, value: 1100 },
			{ month: "May", year: 2022, value: 1210 },
			{ month: "Jun", year: 2022, value: 840 },
			{ month: "Jul", year: 2022, value: 900 },
			{ month: "Aug", year: 2022, value: 760 },
			{ month: "Sep", year: 2022, value: 1530 },
			{ month: "Oct", year: 2022, value: 1400 },
			{ month: "Nov", year: 2022, value: 1700 },
			{ month: "Dec", year: 2022, value: 1200 },
			{ month: "Jan", year: 2023, value: 1400 },
			{ month: "Feb", year: 2023, value: 1500 },
			{ month: "Mar", year: 2023, value: 1600 },
			{ month: "Apr", year: 2023, value: 1700 },
			{ month: "May", year: 2023, value: 1800 },
			{ month: "Jun", year: 2023, value: 1900 },
			{ month: "Jul", year: 2023, value: 2000 },
			{ month: "Aug", year: 2023, value: 2100 },
			{ month: "Sep", year: 2023, value: 2200 },
			{ month: "Oct", year: 2023, value: 2300 },
			{ month: "Nov", year: 2023, value: 2400 },
			{ month: "Dec", year: 2023, value: 2500 },
			{ month: "Jan", year: 2024, value: 1400 },
			{ month: "Feb", year: 2024, value: 1500 },
			{ month: "Mar", year: 2024, value: 1600 },
			{ month: "Apr", year: 2024, value: 1700 },
			{ month: "May", year: 2024, value: 1800 },
			{ month: "Jun", year: 2024, value: 1900 },
			{ month: "Jul", year: 2024, value: 2000 },
			{ month: "Aug", year: 2024, value: 2100 },
			{ month: "Sep", year: 2024, value: 2500 },
			{ month: "Oct", year: 2024, value: 2300 },
		],
		doctorSpecialties: [
			{
				specialty: "Cardiologie",
				numberOfDoctors: 115,
				satisfactionRate: 86,
			},
			{
				specialty: "Neurologie",
				numberOfDoctors: 85,
				satisfactionRate: 82,
			},
			{
				specialty: "Oncologie",
				numberOfDoctors: 70,
				satisfactionRate: 75,
			},
			{
				specialty: "Pédiatrie",
				numberOfDoctors: 95,
				satisfactionRate: 65,
			},
			{
				specialty: "Médecine Générale",
				numberOfDoctors: 145,
				satisfactionRate: 92,
			},
		],
		clinicalTrials: [
			{
				name: "Essai sur l'Hypertension",
				status: "En cours",
				startDate: "2023-05-15",
				endDate: "2025-05-15",
				totalPatients: 300,
			},
			{
				name: "Étude sur les Anticorps Monoclonaux",
				status: "Terminé",
				startDate: "2022-12-01",
				endDate: "2023-07-31",
				totalPatients: 400,
			},
			{
				name: "Essai de Traitement du Cancer",
				status: "En cours",
				startDate: "2023-06-01",
				endDate: "2025-01-31",
				totalPatients: 220,
			},
			{
				name: "Essai sur les Maladies Cardiovasculaires",
				status: "Terminé",
				startDate: "2023-01-01",
				endDate: "2023-06-30",
				totalPatients: 500,
			},
			{
				name: "Étude sur la Santé Mentale",
				status: "Terminé",
				startDate: "2023-02-01",
				endDate: "2023-07-31",
				totalPatients: 850,
			},
			{
				name: "Essai sur l'Obésité",
				status: "En cours",
				startDate: "2023-04-01",
				endDate: "2024-12-31",
				totalPatients: 600,
			},
		],
		hospitalDepartments: [
			{
				department: "Urgences",
				patientsPerDay: 170,
				averageWaitTime: 81,
			},
			{
				department: "Cardiologie",
				patientsPerDay: 95,
				averageWaitTime: 35,
			},
			{
				department: "Neurologie",
				patientsPerDay: 65,
				averageWaitTime: 20,
			},
			{
				department: "Pédiatrie",
				patientsPerDay: 40,
				averageWaitTime: 48,
			},
		],
	},
	{
		name: "Hôpital du Nord",
		location: "Lille, France",
		overview: {
			totalPatients: 10200,
			satisfactionRate: 87,
			totalTreatments: 6700,
			numberOfDoctors: 125,
			numberOfNurses: 270,
		},
		monthlyHospitalizations: [
			{ month: "Jan", year: 2022, value: 1180 },
			{ month: "Feb", year: 2022, value: 1280 },
			{ month: "Mar", year: 2022, value: 1400 },
			{ month: "Apr", year: 2022, value: 1300 },
			{ month: "May", year: 2022, value: 1350 },
			{ month: "Jun", year: 2022, value: 1100 },
			{ month: "Jul", year: 2022, value: 1060 },
			{ month: "Aug", year: 2022, value: 980 },
			{ month: "Sep", year: 2022, value: 1600 },
			{ month: "Oct", year: 2022, value: 1300 },
			{ month: "Nov", year: 2022, value: 1500 },
			{ month: "Dec", year: 2022, value: 1870 },
			{ month: "Jan", year: 2023, value: 1300 },
			{ month: "Feb", year: 2023, value: 1400 },
			{ month: "Mar", year: 2023, value: 1500 },
			{ month: "Apr", year: 2023, value: 1600 },
			{ month: "May", year: 2023, value: 1700 },
			{ month: "Jun", year: 2023, value: 1800 },
			{ month: "Jul", year: 2023, value: 1900 },
			{ month: "Aug", year: 2023, value: 2000 },
			{ month: "Sep", year: 2023, value: 2100 },
			{ month: "Oct", year: 2023, value: 2200 },
			{ month: "Nov", year: 2023, value: 2300 },
			{ month: "Dec", year: 2023, value: 2400 },
			{ month: "Jan", year: 2024, value: 1300 },
			{ month: "Feb", year: 2024, value: 1400 },
			{ month: "Mar", year: 2024, value: 1500 },
			{ month: "Apr", year: 2024, value: 1600 },
			{ month: "May", year: 2024, value: 1700 },
			{ month: "Jun", year: 2024, value: 1800 },
			{ month: "Jul", year: 2024, value: 1900 },
			{ month: "Aug", year: 2024, value: 2000 },
			{ month: "Sep", year: 2024, value: 2300 },
			{ month: "Oct", year: 2024, value: 1770 },
		],
		doctorSpecialties: [
			{
				specialty: "Cardiologie",
				numberOfDoctors: 100,
				satisfactionRate: 84,
			},
			{
				specialty: "Neurologie",
				numberOfDoctors: 70,
				satisfactionRate: 77,
			},
			{
				specialty: "Oncologie",
				numberOfDoctors: 55,
				satisfactionRate: 71,
			},
			{
				specialty: "Pédiatrie",
				numberOfDoctors: 80,
				satisfactionRate: 62,
			},
			{
				specialty: "Médecine Générale",
				numberOfDoctors: 130,
				satisfactionRate: 88,
			},
		],
		clinicalTrials: [
			{
				name: "Essai sur l'Asthme",
				status: "En cours",
				startDate: "2023-03-01",
				endDate: "2025-03-01",
				totalPatients: 400,
			},
			{
				name: "Étude sur les Maladies Respiratoires",
				status: "Terminé",
				startDate: "2022-11-01",
				endDate: "2023-05-30",
				totalPatients: 500,
			},
			{
				name: "Essai de Traitement de l'Insuffisance Cardiaque",
				status: "En cours",
				startDate: "2023-02-15",
				endDate: "2024-10-15",
				totalPatients: 300,
			},
			{
				name: "Étude sur la Dépression",
				status: "Terminé",
				startDate: "2023-01-01",
				endDate: "2023-06-30",
				totalPatients: 700,
			},
			{
				name: "Essai sur le Diabète de Type 2",
				status: "Terminé",
				startDate: "2023-02-01",
				endDate: "2023-09-01",
				totalPatients: 450,
			},
			{
				name: "Étude sur les Troubles de l'Anxiété",
				status: "En cours",
				startDate: "2023-04-01",
				endDate: "2024-12-31",
				totalPatients: 520,
			},
		],
		hospitalDepartments: [
			{
				department: "Urgences",
				patientsPerDay: 155,
				averageWaitTime: 55,
			},
			{
				department: "Cardiologie",
				patientsPerDay: 88,
				averageWaitTime: 30,
			},
			{
				department: "Neurologie",
				patientsPerDay: 60,
				averageWaitTime: 45,
			},
			{
				department: "Pédiatrie",
				patientsPerDay: 30,
				averageWaitTime: 15,
			},
		],
	},
	{
		name: "Hôpital de Nantes",
		location: "Nantes, France",
		overview: {
			totalPatients: 13000,
			satisfactionRate: 92,
			totalTreatments: 9000,
			numberOfDoctors: 160,
			numberOfNurses: 320,
		},
		monthlyHospitalizations: [
			{ month: "Jan", year: 2022, value: 1610 },
			{ month: "Feb", year: 2022, value: 1400 },
			{ month: "Mar", year: 2022, value: 1450 },
			{ month: "Apr", year: 2022, value: 1800 },
			{ month: "May", year: 2022, value: 1300 },
			{ month: "Jun", year: 2022, value: 1180 },
			{ month: "Jul", year: 2022, value: 1000 },
			{ month: "Aug", year: 2022, value: 900 },
			{ month: "Sep", year: 2022, value: 1870 },
			{ month: "Oct", year: 2022, value: 1500 },
			{ month: "Nov", year: 2022, value: 1650 },
			{ month: "Dec", year: 2022, value: 1900 },
			{ month: "Jan", year: 2023, value: 1550 },
			{ month: "Feb", year: 2023, value: 1650 },
			{ month: "Mar", year: 2023, value: 1750 },
			{ month: "Apr", year: 2023, value: 1850 },
			{ month: "May", year: 2023, value: 1950 },
			{ month: "Jun", year: 2023, value: 2050 },
			{ month: "Jul", year: 2023, value: 2150 },
			{ month: "Aug", year: 2023, value: 2250 },
			{ month: "Sep", year: 2023, value: 2350 },
			{ month: "Oct", year: 2023, value: 2450 },
			{ month: "Nov", year: 2023, value: 2550 },
			{ month: "Dec", year: 2023, value: 2650 },
			{ month: "Jan", year: 2024, value: 1550 },
			{ month: "Feb", year: 2024, value: 1650 },
			{ month: "Mar", year: 2024, value: 1750 },
			{ month: "Apr", year: 2024, value: 1850 },
			{ month: "May", year: 2024, value: 1950 },
			{ month: "Jun", year: 2024, value: 2050 },
			{ month: "Jul", year: 2024, value: 2150 },
			{ month: "Aug", year: 2024, value: 2250 },
			{ month: "Sep", year: 2024, value: 2000 },
			{ month: "Oct", year: 2024, value: 1910 },
		],
		doctorSpecialties: [
			{
				specialty: "Cardiologie",
				numberOfDoctors: 125,
				satisfactionRate: 91,
			},
			{
				specialty: "Neurologie",
				numberOfDoctors: 85,
				satisfactionRate: 82,
			},
			{
				specialty: "Oncologie",
				numberOfDoctors: 70,
				satisfactionRate: 75,
			},
			{
				specialty: "Pédiatrie",
				numberOfDoctors: 95,
				satisfactionRate: 68,
			},
			{
				specialty: "Médecine Générale",
				numberOfDoctors: 155,
				satisfactionRate: 94,
			},
		],
		clinicalTrials: [
			{
				name: "Essai sur le Cancer du Poumon",
				status: "En cours",
				startDate: "2023-05-01",
				endDate: "2025-05-01",
				totalPatients: 300,
			},
			{
				name: "Étude sur les Maladies Cardiovasculaires",
				status: "Terminé",
				startDate: "2023-01-01",
				endDate: "2023-06-30",
				totalPatients: 500,
			},
			{
				name: "Essai sur le Diabète de Type 1",
				status: "En cours",
				startDate: "2023-04-01",
				endDate: "2025-04-01",
				totalPatients: 220,
			},
			{
				name: "Étude sur l'Hypertension",
				status: "Terminé",
				startDate: "2023-02-01",
				endDate: "2023-08-01",
				totalPatients: 400,
			},
			{
				name: "Essai de Traitement de la Dépression",
				status: "En cours",
				startDate: "2023-03-01",
				endDate: "2024-12-31",
				totalPatients: 850,
			},
			{
				name: "Essai sur la Santé Mentale",
				status: "Terminé",
				startDate: "2023-01-15",
				endDate: "2023-07-31",
				totalPatients: 600,
			},
		],
		hospitalDepartments: [
			{
				department: "Urgences",
				patientsPerDay: 160,
				averageWaitTime: 52,
			},
			{
				department: "Cardiologie",
				patientsPerDay: 85,
				averageWaitTime: 29,
			},
			{
				department: "Neurologie",
				patientsPerDay: 70,
				averageWaitTime: 33,
			},
			{
				department: "Pédiatrie",
				patientsPerDay: 65,
				averageWaitTime: 44,
			},
		],
	},
]

const resumeTopHospitals: ResumeHospital[] = topHospitals
	.map((hospital: Hospital) => ({
		name: hospital.name,
		location: hospital.location,
		satisfactionRate: hospital.overview.satisfactionRate,
	}))
	.sort((a, b) => b.satisfactionRate - a.satisfactionRate)

const getSpecialties = (hospitals: Hospital[]): string[] => {
	const specialties: string[] = []

	hospitals.forEach((hospital) => {
		hospital.doctorSpecialties.forEach((specialty) => {
			if (!specialties.includes(specialty.specialty)) {
				specialties.push(specialty.specialty)
			}
		})
	})

	return specialties
}

const hospitalsName = topHospitals.map((hospital: Hospital) => hospital.name)
const aggregateHospitalDepartments = (
	hospitals: Hospital[]
): DepartmentSummary[] => {
	return hospitals
		.flatMap((hospital) => hospital.hospitalDepartments)
		.reduce((acc, department) => {
			const existingDepartment = acc.find(
				(dep) => dep.department === department.department
			)

			if (existingDepartment) {
				existingDepartment.hospitalCount += 1

				existingDepartment.averagePatientsPerDay =
					(existingDepartment.averagePatientsPerDay *
						(existingDepartment.hospitalCount - 1) +
						department.patientsPerDay) /
					existingDepartment.hospitalCount

				existingDepartment.averageWaitTime =
					(existingDepartment.averageWaitTime *
						(existingDepartment.hospitalCount - 1) +
						department.averageWaitTime) /
					existingDepartment.hospitalCount
			} else {
				acc.push({
					department: department.department,
					averagePatientsPerDay: department.patientsPerDay,
					averageWaitTime: department.averageWaitTime,
					hospitalCount: 1,
				})
			}

			return acc
		}, [] as DepartmentSummary[])
}

export {
	topHospitals,
	resumeTopHospitals,
	getSpecialties,
	hospitalsName,
	aggregateHospitalDepartments,
}
