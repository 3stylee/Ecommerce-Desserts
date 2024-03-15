import Filters from "@/components/PLP/filters"
import { Header } from "@/components/PLP/header"
import { Container } from "@mui/material"
import React from "react"

export const PLP = ({ params }: any) => {
	return (
		<Container maxWidth="xl" className="overflow-auto">
			<Header title={params.type} />
			<Filters filters={{}} />
		</Container>
	)
}

export default PLP
