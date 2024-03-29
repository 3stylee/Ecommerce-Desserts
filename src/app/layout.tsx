import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TitleBanner from "@/components/globalComponents/titleBanner"
import Footer from "@/components/globalComponents/footer"
import { ThemeProvider } from "@mui/material"
import theme from "../theme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				<body className={`${inter.className} h-screen overflow-y-scroll`}>
					<TitleBanner />
					{children}
					<Footer />
				</body>
			</ThemeProvider>
		</html>
	)
}
