import Main from '../components/Main'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'

const DynamicNavbar=dynamic(() => import('../components/Navbar'),{ssr:false})

function about() {
    return (
        <div className="first-gradient-color">
            <DynamicNavbar/>
            <Main/>        
            <Footer/>
        </div>
    )
}

export default about