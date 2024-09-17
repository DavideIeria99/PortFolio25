export default function page() {
    return (
        <div className="min-h-screen">
            <div className="mx-auto w-1/2 rounded border-4 border-white bg-bodyLight py-10 shadow-md shadow-yellow-300">
                <div className=" flex w-full flex-col text-center">
                    <h1 className="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                        contatti
                    </h1>
                </div>
                <div className="mx-auto  md:w-2/3 lg:w-1/2">
                    <div className="flex flex-wrap">
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label
                                    htmlFor="name"
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="w-1/2 p-2">
                            <div className="relative">
                                <label
                                    htmlFor="email"
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                />
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <div className="relative">
                                <label
                                    htmlFor="message"
                                    className="text-sm leading-7 text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="h-32 w-full resize-none rounded border border-gray-300 bg-gray-100 px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500"
                                ></textarea>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <button className="mx-auto flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
