import Link from "next/link"
function Navbar() {
    return (
        <div className="flex items-center justify-around text-white text-lg p-4 font-semibold">
            <a href='/' className="link">HOME</a>
            <a href="/about" className="link">ABOUT</a>
            <a className="link">RESUME</a>
            <a href="/projects" className="link">PROJECTS</a>
            <a className="link">CONTACT</a>
        </div>
    )
}

export default Navbar
