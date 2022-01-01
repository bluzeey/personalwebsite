import Switch from '@mui/material/Switch'
import {useRecoilState} from 'recoil'
import {languageState} from '../atom/languageAtom'
import English from '../data/english.json';
import German from '../data/german.json';
import {useState,useEffect} from 'react'

function Navbar() {
    const [currentLanguage,setCurrentLanguage]=useState({})
    const [language,setLanguage]=useRecoilState(languageState)
    useEffect(()=>{
        if(language){
          setCurrentLanguage(German)
        }else{
          setCurrentLanguage(English)
        }
    },[language])
    
    return (
        <div className="flex flex-col md:flex-row items-center 
        justify-around bg-clip-text text-transparent second-gradient-color text-lg p-4 font-semibold">
            <a href='/' className="link">{currentLanguage?.Navbar?.[0]}</a>
            <a href="assets/Resume.pdf" download="w3logo" className="link">{currentLanguage?.Navbar?.[1]}</a>
            <a href="/projects/" className="link">{currentLanguage?.Navbar?.[2]}</a>
            <a href={`${process.env.URL}#contact`} className="link">{currentLanguage?.Navbar?.[3]}</a>
            <div className="flex w-15 items-center">
              EN
              <Switch onClick={()=>{setLanguage(prevState=>!prevState)}}/>
              DE
            </div>
        </div>
    )
}

export default Navbar
