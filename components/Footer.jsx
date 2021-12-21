import {LinkedIn, FacebookOutlined, GitHub} from '@mui/icons-material'
function Footer() {
    return (
        <div className="p-2 bg-gray-700">
            <div className="flex justify-around">
               <FacebookOutlined className="text-blue-700" />
               <GitHub/>
               <LinkedIn/>
            </div>
            <div>
                <p className="text-right">Made with NextJs and Tailwind!</p>
            </div>
        </div>
    )
}

export default Footer
