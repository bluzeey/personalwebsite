import Head from 'next/head'
import dynamic from 'next/dynamic'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const DynamicNavbar=dynamic(() => import('../components/Navbar'),{ssr:false})


export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Developer|SahilMaheshwari</title>
        <link rel="icon" href="/myAnimatedFace.jpeg" />
      </Head>
      <div className="first-gradient-color ">
      <DynamicNavbar/>
      <Intro/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
