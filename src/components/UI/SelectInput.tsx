import React, { useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import refreshIcon from "@assets/icons/refresh.png"
import arrowIcon from "@assets/icons/arrow.png"

type SelectInputProps = {
	labels: string[]
	onSelectChange: (value: string) => void
	placeholder?: string
	resetLabel?: boolean
}

export const SelectInput = ({
	labels,
	onSelectChange,
	placeholder,
	resetLabel = false,
}: SelectInputProps) => {
	const [selectedValue, setSelectedValue] = useState<string>("")
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleSelect = (value: string) => {
		setSelectedValue(value)
		onSelectChange(value)
		setIsOpen(false)
	}

	const handleRefresh = () => {
		if (resetLabel) {
			onSelectChange(labels[0])
		} else {
			onSelectChange(placeholder ? placeholder : "")
		}
		setSelectedValue("")
	}

	return (
		<div
			className={clsx(
				selectedValue && "flex items-center justify-center gap-2",
				"w-fit mt-1 mb-3"
			)}>
			{selectedValue && (
				<Image
					onClick={handleRefresh}
					className="w-4 h-4 hover:cursor-pointer hover:opacity-70 transition-all ease-in-out duration-150"
					src={refreshIcon}
					alt="refresh filter"
				/>
			)}

			<button
				className="w-fit flex items-center py-1 pl-3 pr-2 bg-transparent border rounded-full border-primary hover:opacity-80 focus:outline-none transition-all ease-in-out duration-150"
				onClick={() => setIsOpen(!isOpen)}>
				{selectedValue || placeholder || "Select an option"}

				<Image
					onClick={handleRefresh}
					className={clsx(
						!isOpen && "rotate-180",
						"w-4 h-4 hover:cursor-pointer transition-all ease-in-out duration-150 ml-4 md:ml-8"
					)}
					src={arrowIcon}
					alt="refresh filter"
				/>
			</button>

			{isOpen && (
				<ul className="absolute mt-2 z-10 bg-white divide divide-primary/20 rounded-md shadow-lg">
					{labels.map((label: string) => (
						<li
							key={label}
							className="px-4 py-1 hover:bg-[#051f30] hover:text-white cursor-pointer border-b border-primary/20 transition-all ease-in-out duration-150"
							onClick={() => handleSelect(label)}>
							{label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
