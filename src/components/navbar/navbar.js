import React from 'react'

const Navbar = () => {
    return (
          <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                    <li className="nav__item"><a href="https://www.coursera.org/user/22e92f93aa3e429b1add94856d128331" className="nav__link">My Certifications</a></li>
                    <li className="nav__item"><a href="https://sahil-maheshwari.medium.com/" className="nav__link">My Blog</a></li>
                </ul>
           </nav>
    )
}

export default Navbar
