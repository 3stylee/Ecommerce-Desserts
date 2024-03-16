"use client"
import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { SORT_OPTIONS } from "@/config/constants"

const DesktopSort = () => {
	const [sort, setSort] = React.useState("popular")

	const handleChange = (event: SelectChangeEvent) => {
		setSort(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="hidden md:block m-0">
			<InputLabel id="demo-select-small-label">Sort By</InputLabel>
			<Select
				labelId="demo-select-small-label"
				id="demo-select-small"
				value={sort}
				label="Sort By"
				onChange={handleChange}>
				{Object.keys(SORT_OPTIONS).map((key) => (
					<MenuItem key={key} value={key}>
						{SORT_OPTIONS[key]}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default DesktopSort
