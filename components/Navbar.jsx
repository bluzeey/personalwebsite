import Switch from '@mui/material/Switch'
import {useRecoilState} from 'recoil'
import {mediaState} from '../atom/mediaAtom'
import {languageState} from '../atom/languageAtom'
import English from '../data/english.json';
import German from '../data/german.json';
import {useState,useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

function Navbar() {
    const [currentLanguage,setCurrentLanguage]=useState({})
    const [language,setLanguage]=useRecoilState(languageState)
    const [showMenu,setShowMenu]=useRecoilState(mediaState)
    const mobileOnly= useMediaQuery({query:'(min-width: 800px)'})
    console.log(mobileOnly)
    useEffect(()=>{
        if(language){
          setCurrentLanguage(German)
        }else{
          setCurrentLanguage(English)
        }
    },[language])
    return (mobileOnly ?
      (<div className="flex flex-row items-center justify-around bg-clip-text text-transparent second-gradient-color text-lg p-4 font-semibold">
            <a href='/' className="link">{currentLanguage?.Navbar?.[0]}</a>
            <a href='/about' className="link">{currentLanguage?.Navbar?.[1]}</a>
            <a href="/Resume.pdf" download="Resume.pdf" className="link">{currentLanguage?.Navbar?.[2]}</a>
            <a href="/projects/" className="link">{currentLanguage?.Navbar?.[3]}</a>
            <a href={`${process.env.URL}#contact`} className="link">{currentLanguage?.Navbar?.[4]}</a>
            <div className="flex w-15 items-center">
              EN
              <Switch onClick={()=>{setLanguage(prevState=>!prevState)}}/>
              DE
            </div>
        </div>
    ):(showMenu ? (<div onClick={()=>(setShowMenu(prevState=>!prevState))} className="flex justify-end p-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
      </div>
    ):(<div className="h-screen w-full bg-black">
        <div onClick={()=>(setShowMenu(prevState=>!prevState))} className="text-yellow-500 bg-black flex justify-end p-3 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center mt-[25%]">
            <a href='/about' className="reverse-link">{currentLanguage?.Navbar?.[1]}</a>
            <a href="/Resume.pdf" className=" reverse-link" download="Resume.pdf">{currentLanguage?.Navbar?.[2]}</a>
            <a href="/projects/" className="reverse-link" >{currentLanguage?.Navbar?.[3]}</a>
            <a href={`${process.env.URL}#contact`} className="reverse-link" >{currentLanguage?.Navbar?.[4]}</a>
        </div>

    </div>))
  )
}
export default Navbar
