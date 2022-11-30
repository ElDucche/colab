import Head from 'next/head'
import React from 'react'
import Header from './header'
// import { TodoMenu } from './todoMenu'

const Layout = ({ children}: any) => {
  return (
    <div className='h-full'>
        <Head>
            <title>To Do app</title>
        </Head>
        <Header />
        <div className='flex gap-4'>
            {/* <TodoMenu /> */}
            <div className='p-4'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout;