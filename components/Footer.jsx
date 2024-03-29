import {LinkedIn,GitHub, Markunread,Twitter} from '@mui/icons-material'
function Footer() {
    return (
        <footer className="bg-gray-800 w-full py-8">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
                    <a href="https://github.com/bluzeey" target="_blank" className=" hover:text-white transition-colors duration-200">
                        <GitHub className="h-7 text-white"/>
                    </a>
                    <a href="https://www.linkedin.com/in/sahil-maheshwari-702590228/" target="_blank" className=" hover:text-white transition-colors duration-200">
                        <LinkedIn className="h-7 text-white"/>
                    </a>
                    <a href="mailto:sahilm1711@gmail.com" target="_blank" className="hover:text-white transition-colors duration-200">
                        <Markunread className="h-7 text-white"/>
                    </a>
                    <a href="https://twitter.com/TalkinIdeas" target="_blank" className="hover:text-white transition-colors duration-200">
                        <Twitter className="h-7 text-white"/>
                    </a>

                </div>
                <div className="text-center text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Created with Tailwind and Next JS!
                </div>
            </div>
        </footer>

    )
}

export default Footer
