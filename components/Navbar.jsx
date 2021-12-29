import Switch from '@mui/material/Switch'
import {useRecoilState} from 'recoil'
import {languageState} from '../atom/languageAtom'
function Navbar() {
    const [language,setLanguage]=useRecoilState(languageState)
    return (
        <div className="flex flex-col md:flex-row items-center 
        justify-around bg-clip-text text-transparent second-gradient-color text-lg p-4 font-semibold">
            <a href='/' className="link">HOME</a>
            <a href="assets/Resume.pdf" download="w3logo" className="link">RESUME</a>
            <a href="/projects/" className="link">PROJECTS</a>
            <a href="/contact" className="link">CONTACT</a>
            <div className="flex w-15 items-center">
              EN
              <Switch onClick={()=>{setLanguage(prevState=>!prevState)}}/>
              DE
            </div>
        </div>
    )
}

export default Navbar
