"use client"
import React, { useState } from "react"

type SelectInputProps = {
	labels: string[]
	onSelectChange: (value: string) => void
	placeholder?: string
}

export const SelectInput = ({
	labels,
	onSelectChange,
	placeholder,
}: SelectInputProps) => {
	const [selectedValue, setSelectedValue] = useState<string>("")

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedValue(event.target.value)
		onSelectChange(event.target.value)
	}

	return (
		<select
			className="w-fit hover:cursor-pointer px-2 py-1 active:outline-none bg-transparent my-3"
			value={selectedValue}
			onChange={handleChange}>
			{placeholder && (
				<option value="" disabled>
					{placeholder}
				</option>
			)}

			{labels.map((label: string) => (
				<option
					key={`${label}-opt`}
					value={label}
					className="px-4 py-2 hover:cursor-pointer hover:bg-primary">
					{label}
				</option>
			))}
		</select>
	)
}
