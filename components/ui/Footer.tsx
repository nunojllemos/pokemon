import React from 'react'
import Link from 'next/link'
import style from '../../styles/footer.module.css'
import { MdCatchingPokemon } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className={style.footer}>
			<span>
				Designed and developed by
				<Link href={'https://github.com/nunojllemos'}>
					<a className={style.my_link}>nunojllemos</a>
				</Link>
			</span>
			<span>|</span>
			<span className={style.api_container}>
				API from
				<Link href={'https://pokeapi.co/'}>
					<a className={style.pokeapi_link}>PokéAPI</a>
				</Link>
				<MdCatchingPokemon />
			</span>
		</footer>
	)
}

export default Footer
