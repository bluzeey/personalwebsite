import Animation from './Animation';
function Main() {
    return (
        <>
        <div className="flex flex-col w-2/3 m-auto p-0 md:flex-row rounded">
          <div className="flex flex-col justify-center font-bold  b-1 leading-tight">
            <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 m-2">Hi, I am Sahil.</h1>  
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-300 to-yellow-200  text-2xl">I am a final year college student who loves coding , travelling, taking care of my plants and sketching. </p>
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
          </div>
            <div className="bg-white">
                <h1 className="text-3xl text-center">Contact me at:</h1>
                  <div className="flex justify-around">
                  <div>
                    <div>
                        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder=""/>
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"/>
                    </div>
                    <div class="mt-8">
                        <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                        class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div class="mt-8">
                        <button
                        class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                        Send Message
                        </button>
                    </div>
                  </div>
                  <div>
                      <img className="" src="/contact.PNG"/>
                  </div>
                </div>
            </div>
        </>
    )
}

export default Main
