import type { NextPage } from 'next'
import Layout from '../src/components/layout'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Layout>
        <div className="hero">
          <div className="hero-content text-center">
            <div className="w-screen">
              <h1 className="text-2xl font-semibold">Hello there</h1>
              <p className="py-6">You haven't selected a to do item...</p>
              <button className="btn btn-primary">Add a To do</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home
