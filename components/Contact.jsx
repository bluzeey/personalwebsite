function Contact() {
    return (
            <div className="p-5 mx-auto min-h-screen max-w-4xl">
                <div className="font-inter flex xs:flex-col xs:w-full sm:flex-col sm:w-full md:flex-row min-h-screen second-gradient-color w-1/2 justify-between rounded shadow-2xl mx-auto">
                    <div className="p-8">
                    <h1 className="bg-clip-text text-transparent text-yellow-500 text-2xl font-bold mb-6">Contact Me</h1>
                    <form action="/" method="post">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500 " for="name">Name</label>
                            <input className="border py-2 px-3 text-grey-800" type="text" name="name" id="name"/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500" for="email">Email</label>
                            <input className="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-yellow-500" for="password">Message</label>
                            <textarea className="border py-2 px-3 text-grey-800" type="text" name="password" id="password"/>
                        </div>
                        <button className="block bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium uppercase text-lg mx-auto p-4 rounded" type="submit">Send Message</button>
                    </form>
                    </div>
                    <img className="relative max-w-sm" src="/contact.jpg"/>         
                </div>
            </div>
    )
}

export default Contact
