function Contact() {
    return (
            <div class="p-5 min-h-screen max-w-3xl">
                <div class="font-inter flex xs:flex-col xs:w-full sm:flex-col sm:w-full md:flex-row min-h-screen second-gradient-color w-1/2 justify-around rounded shadow-2xl mx-auto">
                    <div className="p-8">
                    <h1 class="bg-clip-text text-transparent text-yellow-500 text-2xl font-bold mb-6">Contact Me</h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-yellow-500 " for="name">Name</label>
                            <input class="border py-2 px-3 text-grey-800" type="text" name="name" id="name"/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-yellow-500" for="email">Email</label>
                            <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-yellow-500" for="password">Message</label>
                            <textarea class="border py-2 px-3 text-grey-800" type="text" name="password" id="password"/>
                        </div>
                        <button class="block bg-yellow-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium uppercase text-lg mx-auto p-4 rounded" type="submit">Send Message</button>
                    </form>
                    </div>
                    <img class="relative max-w-sm" src="/contact.jpg"/>         
                </div>
            </div>
    )
}

export default Contact
