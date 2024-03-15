"use client"
import { ThemeOptions, createTheme } from "@mui/material/styles"
import { Raleway, Source_Sans_3 } from "next/font/google"

//https://coolors.co/5b5f97-edadc7-a9cef4-ecdcb0-dd1c1a
//https://zenoo.github.io/mui-theme-creator/

const sourceSans = Source_Sans_3({ subsets: ["latin"] })

const raleway = Raleway({ subsets: ["latin"] })

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
		fontFamily: raleway.style.fontFamily,
		button: {
			fontFamily: sourceSans.style.fontFamily,
		},
	},
}

const theme = createTheme(themeOptions)

export default theme
