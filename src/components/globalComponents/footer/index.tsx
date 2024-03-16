import { Typography } from "@mui/material"
import React from "react"

const Footer = () => {
	return (
		<div className="p-12 bg-black text-white">
			<Typography variant="h4" className="mb-4">
				Quick Links
			</Typography>
			<ol>
				<li className="mt-2">
					<Typography variant="body2">FAQ&apos;s</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body2">Contact Us</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body2">Privacy Policy</Typography>
				</li>
				<li className="mt-2">
					<Typography variant="body2">Refund Policy</Typography>
				</li>
			</ol>
		</div>
	)
}

export default Footer
