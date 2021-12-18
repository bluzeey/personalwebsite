import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/devicon.png" />
      </Head>
      <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>
      </div>
    </div>
    
  )
}
