import { molecules } from "@/utils/data/molecules/molecules"
import { Molecule } from "@/utils/data/molecules/moleculesTypes"
import { MoleculeCard } from "../MoleculesCharts/MoleculeCard"

export const MoleculesLayout = () => {
	return (
		<section className="w-full grid grid-cols-1 md:grid-cols-3 md:bg-white/20 flex-wrap md:gap-4 md:p-8 rounded-lg mt-4">
			{molecules.map((molecule: Molecule) => (
				<MoleculeCard molecule={molecule} key={molecule.name} />
			))}
		</section>
	)
}
