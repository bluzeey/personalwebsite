function Navbar() {
    return (
        <div className="flex flex-col md:flex-row items-center 
        justify-around bg-clip-text text-transparent second-gradient-color text-lg p-4 font-semibold">
            <a href='/' className="link">HOME</a>
            <a className="link">RESUME</a>
            <a href="assets/Resume.pdf" download="w3logo">PROJECTS</a>
            <a href="/contact" className="link">CONTACT</a>
        </div>
    )
}

export default Navbar
