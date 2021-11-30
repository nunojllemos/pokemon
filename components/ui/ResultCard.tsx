import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from '../../styles/resultsCard.module.css'
import { CgPokemon } from 'react-icons/cg'
import {
	centimetersToFeetAndInches,
	decimetersToCentimeters,
	formatId,
} from '../../util/util'

interface IPokemon {
	pokemon: {
		id: number
		sprites: {
			front_default: string
		}
		name: string
		types: {
			type: {
				name: string
			}
		}[]
		height: number
		weight: number
	}
}

const ResultCard = ({ pokemon }: IPokemon) => {
	const {
		id,
		sprites: { front_default },
		name,
		types,
		height,
		weight,
	} = pokemon

	return (
		<div className={style.results_container}>
			<Image width="75" height="75" src={front_default} />
			<div className={style.details}>
				<p className={style.results_name}>
					<span>{`#${formatId(id)}`}</span>
					{name}
				</p>
				{types.map(type => (
					<span className={style.type_name}>{type.type.name}</span>
				))}
			</div>
			<div className={style.info}>
				<p className={style.label}>
					height:{' '}
					<span className={style.value}>
						{centimetersToFeetAndInches(
							decimetersToCentimeters(height)
						)}
					</span>
				</p>
				<p className={style.label}>
					weight: <span className={style.value}>{weight}</span>
				</p>
			</div>
			<Link href={`/pokemon/${id}`}>
				<a className={style.see_more}>
					See more <CgPokemon />
				</a>
			</Link>
		</div>
	)
}

export default ResultCard
