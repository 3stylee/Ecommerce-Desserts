import { FilterData } from "@/config/models/fiilterData"
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React from "react"

interface FiltersProps {
	filters: FilterData
}

const Filters = ({ filters }: FiltersProps) => {
	return (
		<div className="w-64 hidden md:block px-4 sticky top-16">
			{Object.keys(filters).map((filter, index) => {
				const { title, options } = filters[filter]
				return (
					<Accordion
						elevation={0}
						square
						disableGutters
						key={filter}
						defaultExpanded={index === 0}
						className="after:border-b after:border-gray after:h-1 after:w-full after:block last-of-type:after:hidden">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1-content"
							id="panel1-header">
							{title}
						</AccordionSummary>
						<AccordionDetails>
							{Object.keys(options).map((option) => {
								const { label, count } = options[option]
								return (
									<div key={option} className="flex items-center">
										<FormGroup>
											<FormControlLabel control={<Checkbox />} label={`${label} (${count})`} />
										</FormGroup>
									</div>
								)
							})}
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}

export default Filters
