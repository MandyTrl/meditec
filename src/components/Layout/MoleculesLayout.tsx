import { molecules } from "@/utils/data/molecules/molecules"
import { Molecule } from "@/utils/data/molecules/moleculesTypes"
import Image from "next/image"
import { InsightButton } from "../UI/InsightButton"

export const MoleculesLayout = () => {
	return (
		<section className="w-full grid grid-cols-1 md:grid-cols-3 md:bg-white/20 flex-wrap md:gap-4 md:p-8 rounded-lg mt-4">
			{molecules.map((molecule: Molecule) => {
				return (
					<div
						key={molecule.name}
						className="w-full min-w-[200px] overflow-hidden flex flex-col items-center mt-2 md:mt-0 rounded-lg p-4 opacity-95 hover:opacity-100 ease-in-out duration-150 transition-all shadow-lg ring-1 ring-black/5 isolate backdrop-blur bg-[#F4F4F5]">
						<div className="w-full flex items-start justify-between mb-4">
							<div className="flex flex-col items-start">
								<Image
									src={molecule.image}
									alt={`${molecule.name}-formula-chemical-img`}
									width={200}
									height={200}
								/>
								<p className="text-sm text-vi">{molecule.formula}</p>
							</div>

							<div className="flex flex-col items-end">
								<p className="text-lg font-semibold">{molecule.name}</p>
								<p className="font-semibold text-jinx">{molecule.codeATC}</p>
							</div>
						</div>

						<p className="border-t border-t-vi/40 text-sm pt-4">
							{molecule.description}
						</p>

						<InsightButton onClick={() => console.log("insight soon !")} />
					</div>
				)
			})}
		</section>
	)
}
