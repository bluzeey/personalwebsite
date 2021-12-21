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
      <div className="bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-200">
      <Navbar/>
      <Main/>
      <Footer/>
      </div>
    </div>
  )
}
