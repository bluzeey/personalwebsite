import GithubCalendar from 'react-github-calendar';
import English from '../data/english.json';
import German from '../data/german.json';
import {languageState} from '../atom/languageAtom';
import {useRecoilState} from 'recoil';
import {useEffect,useState} from 'react';
function Intro() {
    const[language,setLanguage]=useRecoilState(languageState)
    const [currentLanguage,setCurrentLanguage]=useState({})
    useEffect(()=>{
        if(language){
          setCurrentLanguage(German)
        }else{
          setCurrentLanguage(English)
        }
    },[language])
    return (
        <>
        <div className="flex items-center p-5">
          <img src="codingDev.svg" className="xs:w-full h-2/5 w-2/5"/>
           <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight">
            <h1 className="text-5xl text-transparent bg-clip-text second-gradient-color">{currentLanguage.greetings}</h1>  
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[0]}</p>
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[1]}</p>
          </div>
        </div>
          <div className="grid justify-center">
            <h1 className="text-3xl text-center mb-5 font-bold text-transparent bg-clip-text second-gradient-color">Days I have Coded</h1>
            <GithubCalendar username="bluzeey"/>
          </div>
        </>
        
    )
}

export default Intro
