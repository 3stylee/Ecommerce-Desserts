export type Products = {
	[key: string]: productData
}

export type productData = {
	title: string
	description: string
	price: number
	flavours: string[]
	type: string
	inStock: boolean
	images: string[]
}
