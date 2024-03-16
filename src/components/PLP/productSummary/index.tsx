import { Products } from "@/config/models/productData"
import React from "react"
import ProductTile from "./productTile"
import { Grid } from "@mui/material"

interface ProductSummaryProps {
	products: Products
}

const ProductSummary = ({ products }: ProductSummaryProps) => {
	return (
		<Grid container columnSpacing={{ xs: 1, sm: 2, lg: 3, xl: 4 }} className="p-0 md:px-4">
			{Object.keys(products).map((product) => (
				<Grid item key={product} xs={6} sm={6} md={4}>
					<ProductTile productData={products[product]} id={product} />
				</Grid>
			))}
		</Grid>
	)
}

export default ProductSummary
