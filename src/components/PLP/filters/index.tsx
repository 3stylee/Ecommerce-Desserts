import { FilterData } from "@/config/models/fiilterData"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React from "react"

interface FiltersProps {
	filters: FilterData
}

const Filters = ({ filters }: FiltersProps) => {
	return (
		<div className="max-w-64">
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
					Accordion 1
				</AccordionSummary>
				<AccordionDetails>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
					blandit leo lobortis eget.
				</AccordionDetails>
			</Accordion>
		</div>
	)
}

export default Filters
