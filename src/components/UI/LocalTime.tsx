export const LocalTime = () => {
	const today = new Date()
	const date = today.getDate()
	const weekday = today.toLocaleString("en-GB", {
		weekday: "long",
	})
	const month = today.toLocaleString("en-GB", {
		month: "long",
	})
	// const year = today.getFullYear()

	return (
		<div className="flex items-center font-medium mt-8">
			<div className="rounded-full w-16 h-16 text-2xl border border-tertiary flex items-center justify-center p-2 mr-2">
				{date}
			</div>
			<div className="flex flex-col">
				<p>{weekday},</p>
				<p>{month}</p>
			</div>
		</div>
	)
}
