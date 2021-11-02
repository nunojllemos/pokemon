import type { NextPage } from 'next'
import { useState } from 'react'
import Footer from './components/ui/Footer'
import Header from './components/ui/Header'
import Logo from './components/ui/Logo'
import Search from './components/ui/Search'

const Home: NextPage = () => {
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (value: string) => {
		setSearchValue(value)
		console.log(searchValue)
	}

	return (
		<div className="app-container box-shadow">
			<Header />
			<Logo width="350" />
			<Search handleSearch={handleSearch} />
			<Footer />
		</div>
	)
}

export default Home
