"use client"
import { Badge, IconButton, Typography } from "@mui/material"
import Link from "@mui/material/Link"
import React from "react"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuIcon from "@mui/icons-material/Menu"
import MenuQuickLinks from "./menuQuickLinks"
import MobileDrawer from "./mobileDrawer"

const TitleBanner = () => {
	const [sidebarOpen, setSidebarOpen] = React.useState(false)
	return (
		<>
			<MobileDrawer sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div className="bg-primary justify-between items-center flex h-15 py-4 px-4 md:px-8 md:h-18">
				<div className="flex md:hidden items-center xs:w-20">
					<IconButton className="text-white" onClick={() => setSidebarOpen(true)}>
						<MenuIcon sx={{ fontSize: 32 }} />
					</IconButton>
				</div>
				<Link href="/" underline="none">
					<Typography variant="h4" fontWeight="600" className="text-white text-2xl xs:text-4xl">
						Sweet Treats
					</Typography>
				</Link>
				<div className="flex items-center">
					<IconButton className="text-white">
						<AccountCircleIcon sx={{ fontSize: 34 }} />
					</IconButton>
					<IconButton className="text-white">
						<Badge badgeContent={1} color="secondary">
							<ShoppingBagIcon sx={{ fontSize: 32 }} />
						</Badge>
					</IconButton>
				</div>
			</div>
			<div className="hidden md:flex justify-center border-b border-primary">
				<div className="flex gap-12 h-12">
					<MenuQuickLinks />
				</div>
			</div>
		</>
	)
}

export default TitleBanner
