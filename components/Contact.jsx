function Contact() {
    return (
            <div class="p-5 items-center h-screen w-full bg-blue-400">
                <div class="font-inter flex sm:flex-col md:flex-col justify-between bg-white rounded shadow-2xl mx-auto">
                    <div className="p-8">
                    <h1 class="text-gray-800 text-2xl font-bold mb-6">Contact Me</h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="last_name">Name</label>
                            <input class="border py-2 px-3 text-grey-800" type="text" name="last_name" id="last_name"/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                            <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email"/>
                        </div>
                        <div class="flex flex-col mb-4">
                            <label class="mb-2 font-bold text-lg text-gray-900" for="password">Message</label>
                            <textarea class="border py-2 px-3 text-grey-800" type="password" name="password" id="password"/>
                        </div>
                        <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Send Message</button>
                    </form>
                    </div>
                    <img class="w-96" src="/contact.jpg"/>         
                </div>
            </div>
    )
}

export default Contact
