import React from 'react'
import style from '../../styles/stat.module.css'

interface IProps {
	name: string
	value: number
}

const Stat = ({ name, value }: IProps) => {
	const valueToWidth = (value: number, name: string) => {
		const constant = name === 'hp' ? 255 : 180
		const width = (value / constant) * 100

		return width
	}

	return (
		<div className={style.stat_container}>
			<div className={style.stat_label}>
				<span className={style.label}>{name}</span>
				<span className={style.value}>{value}</span>
			</div>
			<div className={style.progress_bar}>
				<span
					style={{ width: `${valueToWidth(value, name)}%` }}
					className={style.progress}></span>
			</div>
		</div>
	)
}

export default Stat
