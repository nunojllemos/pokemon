import React from 'react'
import style from '../../styles/typeTag.module.css'

interface IType {
	type: string
}

const TypeTag = ({ type }: IType) => {
	const getColorByType = (type: string): string => {
		let color: string = '#fff'
		switch (type) {
			case 'grass':
				color = '#58B91D'
				break
			case 'poison':
				color = '#531DB9'
				break
			case 'electric':
				color = '#F2F82C'
				break
			case 'fire':
				color = '#E92828'
				break
			case 'water':
				color = '#289CE9'
				break
			case 'psychic':
				color = '#a82bf0'
				break
			case 'ground':
				color = '#694413'
				break
			case 'dragon':
				color = '#DD8224'
				break
			case 'flying':
				color = '#a0d2e5'
				break
			case 'normal':
				color = '#ffffff'
				break
			case 'ghost':
				color = '#303030'
				break
			case 'ice':
				color = '#00bbff'
				break
			case 'fairy':
				color = '#d863e8'
				break
			case 'steel':
				color = '#979797'
				break
			case 'rock':
				color = '#666666'
				break
			case 'bug':
				color = '#318f54'
				break
			case 'fighting':
				color = '#e24747'
				break

			default:
				color = '#303030'
				break
		}

		return color
	}

	return (
		<div
			style={{
				backgroundColor: getColorByType(type),
				color:
					type === 'flying' ||
					type === 'normal' ||
					type === 'electric'
						? '#303030'
						: '#fffff',
			}}
			className={style.type_tag_container}>
			{type}
		</div>
	)
}

export default TypeTag
