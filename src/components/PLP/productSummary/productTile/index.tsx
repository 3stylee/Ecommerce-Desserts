import { productData } from "@/config/models/productData"
import React from "react"
import { Typography } from "@mui/material"

interface ProductSummaryTileProps {
	productData: productData
}

const ProductTile = ({ productData }: ProductSummaryTileProps) => {
	return (
		<div className="mb-4">
			<img src={productData.images[0]} alt="Product Image" />
			<div className="mt-2">
				<div className="flex items-center justify-between mb-2">
					<Typography variant="subtitle1">{productData.title}</Typography>
					<Typography variant="subtitle1">£{productData.price.toFixed(2)}</Typography>
				</div>
				<Typography variant="body2">{productData.description}</Typography>
			</div>
		</div>
	)
}

export default ProductTile
