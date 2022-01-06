import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Developer|SahilMaheshwari</title>
        <link rel="icon" href="/myAnimatedFace.jpeg" />
      </Head>
      <div className="first-gradient-color ">
      <Navbar/>
      <Main/>
      <Footer/>
      </div>
    </div>
  )
}
