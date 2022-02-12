import MainImage from './MainImage';
import PlantHexagon from './PlantHexagon';
import SketchHexagon from './SketchHexagon';
import English from '../data/english.json';
import German from '../data/german.json';
import {languageState} from '../atom/languageAtom';
import {useRecoilState} from 'recoil';
import {useEffect,useState} from 'react';

function Main() {
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
        <div className="flex flex-col xs:w-3/4 w-2/3 m-auto md:flex-row rounded p-5">
          <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight">
            <h1 className="text-5xl text-transparent bg-clip-text second-gradient-color">{currentLanguage.greetings}</h1>  
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[0]}</p>
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[1]}</p>
          </div>
          <MainImage/>
        </div>

        <div className="flex flex-col xs:w-3/4 w-2/3 m-auto md:flex-row rounded p-5">
          <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight md:order-last">
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.plants?.[0]}</p>
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.plants?.[1]}</p>
          </div>
          <PlantHexagon />
        </div>

        <div className="flex flex-col xs:w-3/4 w-2/3 m-auto md:flex-row rounded p-5">
          <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight">
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.sketch?.[0]}</p>
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.sketch?.[1]}</p>
          </div>
          <SketchHexagon/>
        </div>

        <div className="flex flex-col xs:w-3/4 w-2/3 m-auto">
            <div className="flex justify-center text-3xl p-5 mb-3">
            ▶
            <span className=" text-transparent font-bold bg-clip-text second-gradient-color">
              {currentLanguage.audioBooks}
            </span> 
            </div>
            <div className="flex xs:flex-col sm:flex-row justify-around max-w-xl m-auto gap-9 pb-8">
              <img src="/German.jpg" className= "w-28 m-auto" alt="Paul Noble German Audiobook" />
              <img src="/spanish.jpg" className="w-28 m-auto" alt="Paul Noble Spanish Audiobook" />
              <img src="/shoeDog.jpg" className="w-28 m-auto" alt="Shoe Dog by Phil Knight"/>
            </div>
        </div>

        </>
    )
}

export default Main
