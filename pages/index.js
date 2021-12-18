import Head from 'next/head'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/devicon.png" />
      </Head>
      <div>
        <img className="bg-cover w-screen h-full bg-no-repeat bg-fixed" src='/background.png' alt="my-life"/>
      </div>
      <Navbar/>
    </div>
  )
}
