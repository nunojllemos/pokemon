import React from 'react'
import style from '../../styles/logo.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface LogoSizeProps {
	width?: string
}

const Logo = ({ width = '300' }: LogoSizeProps) => {
	const height = Number(width) * 0.36805,
		router = useRouter(),
		pathname = router.pathname

	return (
		<Link href="/">
			<div
				style={{
					width: `${pathname !== '/' ? '150' : width}px`,
					height: `${pathname !== '/' ? '50' : height}px`,
				}}
				className={`${
					pathname !== '/' ? style.mini_logo : style.logo
				} `}></div>
		</Link>
	)
}

export default Logo
