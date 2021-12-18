import Link from "next/link"
function Navbar() {
    return (
        <div className="flex items-center justify-around text-white text-lg p-4 font-semibold">
            <Link href='/' className="hover:bg-violet-400 bg-red-400 cursor-pointer">HOME</Link>
            <a>ABOUT</a>
            <a>RESUME</a>
            <a>PROJECTS</a>
            <a>CONTACT</a>
        </div>
    )
}

export default Navbar
