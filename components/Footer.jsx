import {LinkedIn, FacebookOutlined, GitHub} from '@mui/icons-material'
function Footer() {
    return (
        <footer class="bg-gray-800 w-full py-8">
            <div class="max-w-screen-xl mx-auto px-4">
                <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                    <li class="my-2">
                        <a class=" text-gray-300 hover:text-white transition-colors duration-200" href="#">
                            FAQ
                        </a>
                    </li>
                    <li class="my-2">
                        <a class=" text-gray-300 hover:text-white transition-colors duration-200" href="#">
                            Configuration
                        </a>
                    </li>
                    <li class="my-2">
                        <a class=" text-gray-300 hover:text-white transition-colors duration-200" href="#">
                            Github
                        </a>
                    </li>
                    <li class="my-2">
                        <a class=" text-gray-300 hover:text-white transition-colors duration-200" href="#">
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <div class="pt-8 flex max-w-xs mx-auto items-center justify-between">
                    <a href="#" class=" hover:text-white transition-colors duration-200">
                        <FacebookOutlined className="h-7 text-white"/>
                    </a>
                    <a href="#" class=" hover:text-white transition-colors duration-200">
                        <GitHub className="h-7 text-white"/>
                    </a>
                    <a href="#" class=" hover:text-white transition-colors duration-200">
                        <LinkedIn className="h-7 text-white"/>
                    </a>

                </div>
                <div class="text-center text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Created with Tailwind and Next JS!
                </div>
            </div>
        </footer>

    )
}

export default Footer
