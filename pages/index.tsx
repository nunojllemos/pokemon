import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Footer from '../components/ui/Footer'
import Header from '../components/ui/Header'
import Logo from '../components/ui/Logo'
import Search from '../components/ui/Search'
import Head from 'next/head'

const Home: NextPage = () => {
	const [searchValue, setSearchValue] = useState<string>('')

	const handleSearch = (value: string) => {
		setSearchValue(value)
	}

	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="../public/favicon/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="../public/favicon/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="../public/favicon/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="../public/favicon/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="../public/favicon/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="../public/favicon/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="../public/favicon/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="../public/favicon/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="../public/favicon/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="../public/favicon/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="../public/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="../public/favicon/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="../public/favicon/favicon-16x16.png"
				/>
				<link rel="manifest" href="../public/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="../public/favicon/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<title>Pokémon app | by nunojllemos</title>
			</Head>
			<Search />
		</>
	)
}

export default Home
