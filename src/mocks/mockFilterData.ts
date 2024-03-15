import { FilterData } from "@/config/models/fiilterData"

export const mockFilterData = {
	type: {
		title: "Type",
		options: {
			"1": {
				label: "Cheesecake",
				count: 10,
			},
			"2": {
				label: "Cupcake",
				count: 4,
			},
			"3": {
				label: "Sponge Cake",
				count: 8,
			},
			"4": {
				label: "Other",
				count: 2,
			},
		},
	},
	flavour: {
		title: "Flavour",
		options: {
			"1": {
				label: "Chocolate",
				count: 10,
			},
			"2": {
				label: "Vanilla",
				count: 4,
			},
			"3": {
				label: "Strawberry",
				count: 8,
			},
			"4": {
				label: "Biscoff",
				count: 2,
			},
			"5": {
				label: "Nutella",
				count: 2,
			},
		},
	},
	price: {
		title: "Price",
		options: {
			"1": {
				label: "£0 - £10",
				count: 10,
			},
			"2": {
				label: "£10 - £20",
				count: 4,
			},
			"3": {
				label: "£20 - £30",
				count: 8,
			},
			"4": {
				label: "£30 - £40",
				count: 2,
			},
		},
	},
	availability: {
		title: "Availability",
		options: {
			"1": {
				label: "In Stock",
				count: 10,
			},
			"2": {
				label: "Out of Stock",
				count: 4,
			},
		},
	},
} as FilterData
