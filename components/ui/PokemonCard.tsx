import React from 'react'
import Image from 'next/image'
import style from '../../styles/pokemonCard.module.css'
import TypeTag from './TypeTag'
import { IoMdArrowBack } from 'react-icons/io'
import {
	centimetersToFeetAndInches,
	decimetersToCentimeters,
	formatId,
	hectogramsToKilograms,
} from '../../util/util'
import Link from 'next/link'
import Stat from './Stat'

interface IType {
	type: {
		name: string
	}
}

interface IData {
	data: {
		name: string
		id: number
		sprites: {
			other: {
				['official-artwork']: {
					front_default: string
				}
			}
		}
		types: [
			{
				type: {
					name: string
				}
			}
		]
		height: number
		weight: number
		stats: {
			base_stat: number
			stat: {
				name: string
			}
		}[]
	}
	description: string | undefined
}

const PokemonCard = ({
	data: { name, id, sprites, types, height, weight, stats },
	description,
}: IData) => {
	const pokemonIllustrationURL =
		sprites.other['official-artwork'].front_default

	return (
		<section className={style.card_container}>
			<div className={style.information}>
				<Link href="/">
					<a className={style.back}>
						<IoMdArrowBack />
						Back
					</a>
				</Link>
				<div className={style.pokemon_illustration_container}>
					<Image
						src={pokemonIllustrationURL}
						width={320}
						height={320}
					/>
				</div>
				<div className={style.name_container}>
					<span className={style.info_id}>{formatId(id)}</span>
					<span className={style.info_name}>{name}</span>
				</div>
				<div className={style.types_container}>
					{types.map((type: IType) => (
						<TypeTag type={type.type.name} />
					))}
				</div>
				<div className={style.size_container}>
					<span className={style.label}>Height</span>
					<span className={style.value}>
						{centimetersToFeetAndInches(
							decimetersToCentimeters(height)
						)}
					</span>
					<span className={style.label}>Weight</span>
					<span className={style.value}>
						{hectogramsToKilograms(weight)}
					</span>
				</div>
				<div className={style.description_container}>
					<span className={style.description}>{description}</span>
				</div>
			</div>
			<div className={style.base_stats}>
				<h2>Base stats</h2>
				{stats.map(stat => {
					return <Stat name={stat.stat.name} value={stat.base_stat} />
				})}
			</div>
		</section>
	)
}

export default PokemonCard
