import Image from "next/image"
import { Molecule } from "@/utils/data/molecules/moleculesTypes"
import { InsightButton } from "../UI/InsightButton"

type MoleculeCardProps = {
	molecule: Molecule
	key: string
}

export const MoleculeCard = ({ molecule }: MoleculeCardProps) => {
	const { name, image, formula, codeATC, description } = molecule

	return (
		<div className="w-full min-w-[200px] overflow-hidden flex flex-col items-center mt-2 md:mt-0 rounded-lg p-4 opacity-95 hover:opacity-100 ease-in-out duration-150 transition-all shadow-lg ring-1 ring-black/5 isolate backdrop-blur bg-[#F4F4F5]">
			<div className="w-full flex items-start justify-between mb-4">
				<div className="flex flex-col items-start">
					<Image
						src={image}
						alt={`${name}-formula-chemical-img`}
						width={200}
						height={200}
					/>
					<p className="text-sm text-vi">{formula}</p>
				</div>

				<div className="flex flex-col items-end">
					<p className="text-lg font-semibold">{name}</p>
					<p className="font-semibold text-jinx">{codeATC}</p>
				</div>
			</div>

			<p className="border-t border-t-vi/40 text-sm pt-4">{description}</p>

			<InsightButton onClick={() => console.log("insight soon !")} />
		</div>
	)
}
