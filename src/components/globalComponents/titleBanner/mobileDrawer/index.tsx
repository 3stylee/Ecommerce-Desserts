"use client"
import { IconButton, Typography } from "@mui/material"
import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import { MENU_QUICK_LINKS } from "@/config/constants"
import Link from "next/link"

interface MobileDrawerProps {
	sidebarOpen: boolean
	setSidebarOpen: (open: boolean) => void
}

const MobileDrawer = ({ sidebarOpen, setSidebarOpen }: MobileDrawerProps) => {
	return (
		<div
			className={`${
				sidebarOpen ? "translate-x-0" : "-translate-x-full  w-0"
			} md:w-0 h-full bg-white absolute left-0 origin-top-left w-11/12 transition-transform duration-300 z-50`}>
			<div className={`p-4 md:hidden ${sidebarOpen ? "block" : "hidden"} transition-display duration-700`}>
				<IconButton onClick={() => setSidebarOpen(false)}>
					<CloseIcon sx={{ fontSize: 32 }} />
				</IconButton>
				<div className="px-4">
					{MENU_QUICK_LINKS.map((link) => (
						<Link
							key={link}
							href={`/shop/${link}`}
							className="block my-4 capitalize text-primary"
							onClick={() => setSidebarOpen(false)}>
							<Typography variant="h6">{link}</Typography>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default MobileDrawer
