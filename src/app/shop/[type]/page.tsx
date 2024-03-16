import Filters from "@/components/PLP/filters"
import { Header } from "@/components/PLP/header"
import ProductSummary from "@/components/PLP/productSummary"
import { mockFilterData } from "@/mocks/mockFilterData"
import { mockProducts } from "@/mocks/mockProducts"
import { Container } from "@mui/material"
import React from "react"

const PLP = ({ params }: any) => {
	return (
		<Container maxWidth="xl" className="p-0 md:px-4">
			<Header title={params.type} />
			<div className="flex">
				<Filters filters={mockFilterData} />
				<ProductSummary products={mockProducts} />
			</div>
		</Container>
	)
}

export default PLP
