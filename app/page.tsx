import type { Metadata, NextPage } from "next"
import Link from "next/link"
import Button from "~/components/Button"

export const metadata: Metadata = {
	title: "Home",
	description: "Home page on Next.js App Directory",
}

const Home: NextPage = () => {
	return (
		<main className="flex flex-col gap-8">
			<h1 className="text-xl">Hello Next.js</h1>
			<Link href={"/nest"}>
				<Button>Go nest page</Button>
			</Link>
			<section>
				<p className="text-5xl">ノトサンズで美しい日本語を表現します</p>
				<p className="text-5xl">Expressing beautiful English by Montserrat</p>
			</section>
		</main>
	)
}

export default Home
