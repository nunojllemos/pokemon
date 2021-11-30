import React, { useEffect, useState } from 'react'
import style from '../../styles/search.module.css'
import Container from '../layout/Container'
import { BsSearch } from 'react-icons/bs'
import Link from 'next/link'
import axios from 'axios'
import { POKEMON_URL } from '../../config'
import ResultCard from './ResultCard'

interface IResponse {
	id: number
	sprites: { front_default: string }
	name: string
	types: {
		type: {
			name: string
		}
	}[]
	height: number
	weight: number
}

const Search = () => {
	const [inputValue, setInputValue] = useState<string>('')
	const [pokemon, setPokemon] = useState<IResponse>()
	const [loading, setLoading] = useState(true)
	const [result, setResult] = useState(false)
	const [message, setMessage] = useState('')

	const handleInputChange = (value: string) => {
		setInputValue(value)
	}

	const setMessageWithTimeout = (message: string, time: number = 5000) => {
		setMessage(message)
		setTimeout(() => {
			setMessage('')
		}, time)
	}

	const fetchData = async (value: string) => {
		try {
			setMessage('Loading...')
			const response = await axios.get(`${POKEMON_URL}${value.trim()}`)
			const data = await response.data
			setPokemon(data)
			setLoading(false)
		} catch (error) {
			setMessageWithTimeout('No match...')
		}
	}

	useEffect(() => {
		if (inputValue.trim() !== '') {
			setLoading(true)
			fetchData(inputValue)
			setResult(true)
		} else {
			setResult(false)
		}
	}, [inputValue])

	return (
		<Container>
			<form className={style.form}>
				<div className={style.search_container}>
					#
					<input
						className={style.search}
						type="text"
						onKeyUp={e => {
							handleInputChange(e.currentTarget.value)
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
			</form>
			{loading ? (
				<h3>{message}</h3>
			) : (
				result && (
					<div
						className={`${style.results_container} ${style.active}`}>
						<div className={style.results_item}>
							{pokemon !== undefined ? (
								<ResultCard pokemon={pokemon} />
							) : (
								''
							)}
						</div>
					</div>
				)
			)}
		</Container>
	)
}

export default Search
