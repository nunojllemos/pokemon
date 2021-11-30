import React from 'react'
import style from '../styles/notFound.module.css'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div className={style.container}>
			<h1>
				404
				<span>Not found!</span>
			</h1>
			<div className={style.description}>
				<p>Sorry, we were unable to find that page.</p>
				<p>
					Go back{' '}
					<a className={style.link}>
						<Link href={'/'}>home</Link>
					</a>{' '}
					and try again.
				</p>
			</div>
			<Image src={'/404.png'} width={600} height={370} />
		</div>
	)
}

export default NotFound
