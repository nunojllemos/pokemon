import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import Header from '../components/ui/Header'
import Logo from '../components/ui/Logo'
import Footer from '../components/ui/Footer'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<div className="app-container box-shadow">
				<Header />
				<Logo width="350" />
				<Component {...pageProps} />
				<Footer />
			</div>
		</Layout>
	)
}

export default MyApp
