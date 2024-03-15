export type FilterData = {
	[key: string]: {
		title: string
		options: {
			[key: string]: {
				label: string
				count: number
			}
		}
	}
}
