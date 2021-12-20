function Main() {
    return (
        <>
        <div className="flex flex-col w-2/3 m-auto p-0 md:flex-row bg-white rounded leading-normal">
        <div className="flex flex-col text-black break-words font-bold text-xl b-1 leading-tight">
        <h1 className="m-auto">Hi, I am Sahil.</h1>  
        <p className="text-grey-darker text-base ">I am a final year college student who loves coding , travelling, taking care of my plants and sketching. </p>
        </div>
        <img className="rounded m-auto" src="/background.png"/>
        </div>

        <div className="bg-gray-700">
            <h1 className="text-center text-2xl text-green-600">Some of my projects</h1>
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
        </div>

        <div>
            Contact me at:
        </div>
        </>
    )
}

export default Main
