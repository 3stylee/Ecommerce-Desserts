import { MENU_QUICK_LINKS } from "@/config/constants"
import { Badge, Typography } from "@mui/material"
import Link from "@mui/material/Link"
import React from "react"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuIcon from "@mui/icons-material/Menu"

export const TitleBanner = () => {
	return (
		<>
			<div className="bg-primary justify-between items-center flex h-18 py-4 px-8">
				<div className="flex md:hidden items-center text-white">
					<MenuIcon sx={{ fontSize: 32 }} />
				</div>
				<Typography variant="h4" fontWeight="600" className="text-white">
					Sweet Treats
				</Typography>
				<div className="flex items-center gap-6 text-white">
					<AccountCircleIcon sx={{ fontSize: 34 }} />
					<Badge badgeContent={1} color="secondary">
						<ShoppingBagIcon sx={{ fontSize: 32 }} />
					</Badge>
				</div>
			</div>
			<div className="hidden md:flex justify-center border-b border-primary">
				<div className="flex gap-12 h-12">
					{MENU_QUICK_LINKS.map((link) => (
						<div
							key={link}
							className="flex h-full items-center text-primary hover:text-secondary hover:border-b-2 border-secondary">
							<Link
								variant="h6"
								underline="none"
								key={link}
								href={`/shop/${link}`}
								className="capitalize text-inherit">
								{link}
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default TitleBanner
