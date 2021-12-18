import Link from "next/link"
function Navbar() {
    return (
        <div className="flex items-center justify-around text-white text-lg h-16 font-semibold">
            <Link href='/' className="hover:blue-400 cursor-pointer">HOME</Link>
            <a>ABOUT</a>
            <a>RESUME</a>
            <a>PROJECTS</a>
            <a>CONTACT</a>
        </div>
    )
}

export default Navbar
