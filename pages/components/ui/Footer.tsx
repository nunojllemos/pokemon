import React from 'react'
import Link from 'next/link'
import style from '../../../styles/footer.module.css'

const Footer = () => {
	return (
		<footer className={style.footer}>
			Designed and developed by{' '}
			<span>
				<Link href={'https://github.com/nunojllemos'}>
					<a className={style.my_link}>nunojllemos</a>
				</Link>
			</span>
		</footer>
	)
}

export default Footer
