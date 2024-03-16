export const MENU_QUICK_LINKS = ["brownies", "cookies", "cakes", "other"]

interface SortOptions {
	[key: string]: string
}

export const SORT_OPTIONS: SortOptions = {
	popular: "Most Popular",
	title: "Alphabetical",
	price: "Price: Low - High",
	pricerev: "Price: High - Low",
}
