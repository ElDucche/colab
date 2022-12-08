import Head from 'next/head'
import React from 'react'
import Header from './header'
// import {TodoMenu} from './todoMenu'

const Layout = ({ children}: any) => {
  return (
    <div className='h-full bg-base-200'>
        <Head>
            <title>To Do app</title>
        </Head>
        <Header />
        {children}
    </div>
  )
}

export default Layout;