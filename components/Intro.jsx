import GithubCalendar from 'react-github-calendar';
import English from '../data/english.json';
import German from '../data/german.json';
import {languageState} from '../atom/languageAtom';
import {useRecoilState} from 'recoil';
import {useEffect,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3Alt,faJsSquare,faReact,faNode,faFigma,} from '@fortawesome/free-brands-svg-icons'
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
        <div className="flex xs:flex-wrap lg:flex-nowrap items-center max-w-7xl m-auto p-5">
          <img src="Sample.svg" className="xs:w-1/2 w-3/4 max-w-xs m-auto grow"/>
           <div className="grow font-inter flex justify-center flex-col font-bold b-1 leading-tight m-5">
            <h1 className="text-5xl text-transparent bg-clip-text second-gradient-color">{currentLanguage.greetings}</h1>  
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[0]}</p>
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">{currentLanguage.intro?.[1]}</p>
          </div>
        </div>
        <div className="max-w-7xl m-auto p-5">
            <h1 className="text-3xl text-transparent font-bold bg-clip-text second-gradient-color text-center p-2">Technologies I currently use:</h1>
            <div className="flex flex-wrap m-auto justify-center">
                <img className="icons" alt="HTML5" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
                <img className="icons" alt="CSS3" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
                <img className="icons" alt="Visual Studio Code" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />
                <img className="icons" alt="JavaScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />
                <img className="icons" alt="GraphQL" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png" />
                <img className="icons" alt="Node.js" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />
                <img className="icons" alt="Git" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" />
                <img className="icons" alt="TypeScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" />
            </div>
        </div>
          {/* <div className="grid justify-center p-5">
            <h1 className="text-3xl text-center mb-5 font-bold text-transparent bg-clip-text second-gradient-color">Days I have Coded</h1>
            <GithubCalendar username="bluzeey"/>
          </div> */}
        </>
        
    )
}

export default Intro
