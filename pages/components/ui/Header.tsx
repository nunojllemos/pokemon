import React from 'react'
import style from '../../../styles/header.module.css'

const Header = () => {
	return (
		<header className={style.header}>
			<nav>
				<a
					href="https://www.github.com/nunojllemos"
					className={style.link}>
					github
				</a>
				<a
					href="https://www.linkedin.com/in/nunojllemos"
					className={style.link}>
					linkedin
				</a>
			</nav>
		</header>
	)
}

export default Header
