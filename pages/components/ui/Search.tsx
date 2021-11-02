import React, { useRef, useState } from 'react'
import style from '../../../styles/search.module.css'
import Container from '../layout/Container'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'

const Search = ({ handleSearch }) => {
	const [inputValue, setInputValue] = useState('')
	const input = useRef<HTMLInputElement>()

	const handleInputChange = (value: string) => {
		setInputValue(value)
	}

	return (
		<Container>
			<div className={style.search_container}>
				#
				<input
					ref={input}
					className={style.search}
					type="text"
					onKeyUp={e => {
						handleInputChange(input.current.value)
					}}
				/>
				<label className={style.search_tooltip}>
					Search by name or by id
				</label>
				<button
					className={style.search_button}
					disabled={inputValue.length > 2 ? false : true}
					onClick={e => {
						e.preventDefault()
						handleSearch(input.current.value)
					}}>
					<Link href="/pokemons">
						<BsSearch
							style={{ transition: 'opacity ease 0.3s' }}
							className={style.search_icon}
							cursor={'pointer'}
							color="#282828"
						/>
					</Link>
				</button>
			</div>
		</Container>
	)
}

export default Search
