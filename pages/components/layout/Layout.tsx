import React from 'react'
import style from '../../../styles/layout.module.css'

const Layout = ({ children }: any) => {
	return <div className={style.layout}>{children}</div>
}

export default Layout
