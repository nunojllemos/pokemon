import React from 'react'
import style from '../../../styles/logo.module.css'

interface LogoSizeProps {
	width?: string
}

const Logo = ({ width = '300' }: LogoSizeProps) => {
	const height = Number(width) * 0.36805

	return (
		<div
			style={{ width: `${width}px`, height: `${height}px` }}
			className={style.logo}></div>
	)
}

export default Logo
