"use client"
import { MENU_QUICK_LINKS } from "@/config/constants"
import { Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const MenuQuickLinks = () => {
	const pathname = usePathname()
	return MENU_QUICK_LINKS.map((link) => (
		<div
			key={link}
			className={`flex flex-col h-full items-center justify-center text-primary after:h-0.5 after:block hover:after:bg-secondary hover:after:w-full hover:text-secondary ${
				pathname.includes(link) ? "after:w-full after:bg-primary" : "after:w-0  after:bg-transparent"
			} after:transition-all after:duration-300 after:ease-out duration-300`}>
			<Link key={link} href={`/shop/${link}`} className="capitalize text-inherit my-auto">
				<Typography variant="subtitle1">{link}</Typography>
			</Link>
		</div>
	))
}

export default MenuQuickLinks
