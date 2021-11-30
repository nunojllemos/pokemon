import React from 'react'
import axios from 'axios'
import { POKEMON_URL, DESCRIPTION_URL } from '../../config/index'
import PokemonCard from '../../components/ui/PokemonCard'
import { useRouter } from 'next/router'
import Spinner from '../../components/ui/Spinner'

interface IParamsProps {
	params: {
		id: string
	}
}

interface IProps {
	data: {
		name: string
		id: number
		sprites: {
			other: {
				'official-artwork': {
					front_default: string
				}
			}
		}
		types: [{ type: { name: string } }]
		height: number
		weight: number
		stats: {
			base_stat: number
			stat: {
				name: string
			}
		}[]
	}
	description: {
		flavor_text_entries: {
			language: {
				name: string
			}
			flavor_text: string
		}[]
	}
}

export default function Pokemon({ data, description }: IProps) {
	const router = useRouter()
	if (router.isFallback) return <Spinner />

	const enDescriptions = description.flavor_text_entries
		.map(description => {
			if (description.language.name === 'en') {
				return description.flavor_text
			}
		})
		.filter(description => description !== undefined)

	return <PokemonCard description={enDescriptions[0]} data={data} />
}

export async function getStaticPaths() {
	let initialID: number = 1
	const finalID: number = 151
	let ids: { params: { id: string } }[] = []

	for (initialID; initialID <= finalID; initialID++) {
		ids.push({ params: { id: initialID.toString() } })
	}

	return {
		paths: ids,
		fallback: true,
	}
}

export async function getStaticProps({ params: { id } }: IParamsProps) {
	const response = await axios.get(`${POKEMON_URL}${id}`)
	const description = await axios.get(`${DESCRIPTION_URL}${id}`)

	if (!response) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data: response.data,
			description: description.data,
		},
		notFound: false,
		revalidate: 1000,
	}
}
