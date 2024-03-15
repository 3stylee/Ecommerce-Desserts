import { Typography } from "@mui/material"
import React from "react"
import DesktopSort from "../desktopSort"

interface HeaderProps {
	title: string
}

export const Header = ({ title }: HeaderProps) => {
	return (
		<div className="flex items-center justify-between p-2 pt-4 capitalize">
			<Typography variant="h5">
				{title} <span className="text-gray-500">(69)</span>
			</Typography>
			<DesktopSort />
		</div>
	)
}
