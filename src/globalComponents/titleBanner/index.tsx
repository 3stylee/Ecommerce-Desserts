"use client"
import { MENU_QUICK_LINKS } from "@/config/constants"
import { Badge, Typography } from "@mui/material"
import Link from "@mui/material/Link"
import React from "react"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import MenuIcon from "@mui/icons-material/Menu"
import { usePathname } from "next/navigation"

export const TitleBanner = () => {
	const pathname = usePathname()
	return (
		<>
			<div className="bg-primary justify-between items-center flex h-18 py-4 px-8">
				<div className="flex md:hidden items-center text-white">
					<MenuIcon sx={{ fontSize: 32 }} />
				</div>
				<Link href="/" underline="none">
					<Typography variant="h4" fontWeight="600" className="text-white">
						Sweet Treats
					</Typography>
				</Link>
				<div className="flex items-center gap-6 text-white">
					<AccountCircleIcon sx={{ fontSize: 34 }} />
					<Badge badgeContent={1} color="secondary">
						<ShoppingBagIcon sx={{ fontSize: 32 }} />
					</Badge>
				</div>
			</div>
			<div className="hidden md:flex justify-center border-b border-primary">
				<div className="flex gap-12 h-12">
					{MENU_QUICK_LINKS.map((link) => {
						const active = pathname.includes(link)
						return (
							<div
								key={link}
								className={`flex flex-col h-full items-center justify-center text-primary after:h-0.5 after:block hover:after:bg-secondary hover:after:w-full hover:text-secondary ${
									active ? "after:w-full after:bg-primary" : "after:w-0  after:bg-transparent"
								} after:transition-all after:duration-300 after:ease-out duration-300`}>
								<Link
									variant="h6"
									underline="none"
									key={link}
									href={`/shop/${link}`}
									className="capitalize text-inherit my-auto">
									{link}
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default TitleBanner
