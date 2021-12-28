import {useState} from 'react';

function Contact() {
    const [sentMessage,setsentMessage]=useState(false)
    return (
            <div className="p-5 min-h-screen max-w-5xl mx-auto">
                <div className="font-inter grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 min-h-screen second-gradient-color align-middle rounded shadow-2xl">
                    <div className="p-4 col-span-1">
                    <h1 className="bg-clip-text text-transparent text-yellow-500 text-center text-2xl font-bold mb-6">Contact Me</h1>
                    <form target="_blank" action="7588b525780fc1da38b4ef89858b3a41" method="POST">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500 " htmlFor="name">Name</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" required/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500" htmlFor="email">Email</label>
                            <input className="border py-2 px-3 text-grey-800" type="email" name="email" id="email" required/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500" htmlFor="message">Message</label>
                            <textarea className="border py-2 px-3 text-grey-800" type="text" name="message" id="message" required/>
                        </div>
                        <button onClick={()=>setsentMessage(true)} type="submit" className="block bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium uppercase text-lg mx-auto p-4 rounded" type="submit">Send Message</button>
                    </form>
                    </div>
                    <img className="col-span-1 max-w-full h-auto" src="/contact.jpg"/>         
                </div>
            </div>
    )
}

export default Contact
