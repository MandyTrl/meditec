"use client"
import { useEffect, useState } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer } from "@components/ChartUI/ChartContainer"
import { ChartHeader } from "@components/ChartUI/ChartHeader"
import { InsightButton } from "@components/UI/InsightButton"
import { handleChartHeight, shadowTool } from "@/utils/utils"
import { Hospital } from "@/utils/data/hospitals/hospitalsTypes"
import nurseIcon from "@assets/icons/nurse.svg"

type EmployeesPieProps = {
	datas: Hospital[]
	hasHospitalSelected: boolean
	isMobile: boolean
}

type EmployeesPie = {
	name: string
	value: number
}
export const EmployeesPie = ({
	datas,
	hasHospitalSelected,
	isMobile,
}: EmployeesPieProps) => {
	const [chartDatas, setChartDatas] = useState<EmployeesPie[]>([
		{ name: "nurses", value: 0 },
		{ name: "doctors", value: 0 },
	])

	const [hasBeenClicked, setHasBeenClicked] = useState<boolean>(false)

	useEffect(() => {
		const employeesDatas = (datas: Hospital[]) => {
			if (!datas) {
				return [
					{ name: "nurses", value: 0 },
					{ name: "doctors", value: 0 },
				]
			} else {
				if (hasHospitalSelected) {
					const hospitalSelected = datas[0]
					return [
						{
							name: "nurses",
							value: hospitalSelected.overview.numberOfNurses,
						},
						{
							name: "doctors",
							value: hospitalSelected.overview.numberOfDoctors,
						},
					]
				} else {
					const total = datas.reduce(
						(acc, hospital) => {
							return [
								{
									name: "nurses",
									value: (acc[0].value += hospital.overview.numberOfNurses),
								},
								{
									name: "doctors",
									value: (acc[1].value += hospital.overview.numberOfDoctors),
								},
							]
						},
						[
							{ name: "nurses", value: 0 },
							{ name: "doctors", value: 0 },
						] //valeur initiale contenant les totaux
					)

					return total
				}
			}
		}

		setChartDatas(employeesDatas(datas))
	}, [datas, hasHospitalSelected])

	return (
		<ChartContainer>
			<ChartHeader
				title="Employees"
				icon={nurseIcon}
				description="Distribution nurses vs doctors"
			/>

			<ResponsiveContainer
				width="100%"
				height={handleChartHeight({ isMobile, isPie: true })}>
				<PieChart
					width={isMobile || hasHospitalSelected ? 320 : 800}
					height={isMobile ? 300 : 330}>
					<Pie
						dataKey="value"
						startAngle={180}
						endAngle={0}
						data={chartDatas}
						cx="50%"
						cy="50%"
						outerRadius={80}
						innerRadius={45}>
						<Cell key="nurses" fill="#aed6f1" />
						<Cell key="doctors" fill="#1b4f72" />
					</Pie>

					<Tooltip
						cursor={{
							radius: 8,
							y: 10,
						}}
						contentStyle={{
							border: "none",
							padding: 12,
							borderRadius: 8,
							boxShadow: `${shadowTool}`,
							fontSize: 15,
						}}
						labelStyle={{ fontSize: 16 }}
						itemStyle={{
							lineHeight: 1,
							fontWeight: 600,
						}}
					/>
				</PieChart>
			</ResponsiveContainer>

			<InsightButton
				onClick={() => setHasBeenClicked((prevState) => !prevState)}
			/>
		</ChartContainer>
	)
}
