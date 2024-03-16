import { Title } from "@/components/PDP/title"
import React from "react"

const PDP = ({ params }: any) => {
	return (
		<div>
			{params.product}
			<Title />
		</div>
	)
}

export default PDP
