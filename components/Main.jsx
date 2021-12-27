import Animation from './Animation';
import Contact from './Contact';
function Main() {
    return (
        <>
        <div className="flex flex-col w-2/3 m-auto p-0 md:flex-row rounded">
          <div className="flex flex-col justify-center font-bold  b-1 leading-tight">
            <h1 className="text-5xl text-transparent text-white m-2">Hi, I am Sahil.</h1>  
            <p className="text-transparent bg-clip-text text-white text-2xl">I am a final year college student who loves coding , travelling, taking care of my plants and sketching. </p>
          </div>
          <Animation/>
        </div>

        <div className="p-4 bg-gradient-radial-at-b from-gray-400 via-gray-600 to-gray-900">
            <h1 className="text-center text-5xl font-bold text-white mb-4">Some of my projects</h1>
            <div className="flex justify-around">
                <div className="bg-white rounded w-1/4">
                    <img className="rounded m-auto" src="/dummy.jpg"/>
                    <h1>Project #1</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation .</p>
                </div>
                <div className="bg-white rounded w-1/4">
                    <img className="rounded m-auto" src="/dummy.jpg"/>
                    <h1>Project #2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation .</p>
                </div>
                <div className="bg-white rounded w-1/4">
                    <img className="rounded m-auto" src="/dummy.jpg"/>
                    <h1>Project #3</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                       Ut enim ad minim veniam, quis nostrud exercitation .</p>
                </div>
            </div>
                <button className="text-center">See More</button>
          </div>
          <Contact/>
        </>
    )
}

export default Main
