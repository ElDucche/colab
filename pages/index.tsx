import type { NextPage } from 'next'
import Layout from '../src/components/layout'
import { prisma } from '../lib/prisma'
import Link from 'next/link'
import clsx from 'clsx'
// import { TodoMenu } from '../src/components/todoMenu'

const Home: NextPage = ({todos} : any) => {
  return (
    <div className="min-h-screen">
      <Layout>
        <div className='flex gap-4'>
          <div className="">
            <ul className="menu bg-base-100 shadow-xl w-40 md:w-56 h-screen">
                {
                    todos.map((todo: any, i: number) => 
                      (
                          <li key={i} className={clsx({
                              ['disabled']: todo.isCompleted,
                          }, 'hover-bordered')}><Link href={`/todo/${todo.id}`}> {todo.title} </Link></li>
                      )
                    )
                }
            </ul>
          </div>
          <div className="w-screen p-2">
            <h1 className="text-xl font-semibold">Hello there</h1>
            <p className="py-6">You haven't selected a to do item...</p>
            <Link className="btn btn-primary" href={'/todo/new'}>Add a To do</Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  const todos = await prisma?.todo.findMany()
  console.log(todos)
  return {
      props : {
          todos
      }
  }
}

export default Home
