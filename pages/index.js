import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
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
      <Intro/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
