import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/devicon.png" />
      </Head>
      <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <Navbar/>
      <Main/>
      <Footer/>
      </div>
    </div>
    
  )
}
