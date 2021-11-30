import React from 'react'
import style from '../../styles/header.module.css'

const Header = () => {
	return (
		<header className={style.header}>
			<nav>
				<a
					href="https://www.github.com/nunojllemos/pokemon"
					className={style.link}>
					repository
				</a>
			</nav>
		</header>
	)
}

export default Header
