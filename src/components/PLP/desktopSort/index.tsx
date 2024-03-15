"use client"
import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

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
				<MenuItem value="popular">Most Popular</MenuItem>
				<MenuItem value="title">Alphabetical</MenuItem>
				<MenuItem value="price">Price: Low - High</MenuItem>
				<MenuItem value="pricerev">Price: High - Low</MenuItem>
			</Select>
		</FormControl>
	)
}

export default DesktopSort
