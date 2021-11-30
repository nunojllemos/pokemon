import React, { ReactNode } from 'react'
import style from '../../styles/layout.module.css'

const Container = ({ children }: any) => {
	return <div className={style.container}>{children}</div>
}

export default Container
