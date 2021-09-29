import React from 'react'
import Navbar from '../navbar/navbar'

const Header = () => {
    return (
            <header>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src="assets/imgs/myLogo.png" alt="my Logo"
                    className="h-24 w-1/2"/>
            </div>
            <button className="nav-toggle" aria-label="toggle-navigation">
                <span className="hamburger"></span>
            </button>
            <Navbar/>
        </header>
    )
}

export default Header
