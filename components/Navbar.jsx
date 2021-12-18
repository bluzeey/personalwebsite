import Link from "next/link"
function Navbar() {
    return (
        <div className="flex items-center justify-around text-white text-lg p-4 font-semibold">
            <Link href='/' className="hover:bg-black cursor-pointer">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <a>RESUME</a>
            <a>PROJECTS</a>
            <a>CONTACT</a>
        </div>
    )
}

export default Navbar
