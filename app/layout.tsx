import { Noto_Sans_JP, Montserrat } from "next/font/google"
import "./global.css"

const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	variable: "--font-notosans",
	display: "swap",
})

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	display: "swap",
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="ja" className={`${montserrat.variable} ${notoSansJP.variable}`}>
			<body className="flex min-h-screen w-screen justify-center p-4">{children}</body>
		</html>
	)
}

export default RootLayout
