"use client"
import { ThemeOptions, createTheme } from "@mui/material/styles"
import { Lora, Source_Sans_3 } from "next/font/google"

//https://coolors.co/5b5f97-edadc7-a9cef4-ecdcb0-dd1c1a

const lora = Lora({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
})

const sourceSansPro = Source_Sans_3({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
})

const themeOptions: ThemeOptions = {
	palette: {
		mode: "light",
		primary: {
			main: "#5B5F97",
		},
		secondary: {
			main: "#EDADC7",
		},
		success: {
			main: "#2e7d32",
		},
		error: {
			main: "#DD1C1A",
		},
	},
	typography: {
		fontFamily: lora.style.fontFamily,
		button: {
			fontFamily: sourceSansPro.style.fontFamily,
		},
	},
}

const theme = createTheme(themeOptions)

export default theme
