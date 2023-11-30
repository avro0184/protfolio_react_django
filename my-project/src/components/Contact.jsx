import React from 'react'

export default function Contact() {
    return (
        <>
            <div className='min-h-screen  bg-[#161513] text-white'>

                <section class="pb-20 relative block bg-blueGray-800">
                    <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div class="flex flex-wrap text-center justify-center">
                            <div class="w-full lg:w-6/12 px-4">
                                <h2 class="text-4xl font-semibold text-white">Build something</h2>
                                <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                                    Put the potentially record low maximum sea ice extent tihs year
                                    down to low ice. According to the National Oceanic and
                                    Atmospheric Administration, Ted, Scambos.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap mt-12 justify-center text-white">
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div class="text-lightBlue-300 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i class="fas fa-medal text-xl"></i>
                                </div>
                                <h6 class="text-xl mt-5 font-semibold text-white">
                                    Excelent Services
                                </h6>
                                <p class="mt-2 mb-4 text-blueGray-400">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i class="fas fa-poll text-xl"></i>
                                </div>
                                <h5 class="text-xl mt-5 font-semibold text-white">
                                    Grow your market
                                </h5>
                                <p class="mt-2 mb-4 text-blueGray-400">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                            <div class="w-full lg:w-3/12 px-4 text-center">
                                <div class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <i class="fas fa-lightbulb text-xl"></i>
                                </div>
                                <h5 class="text-xl mt-5 font-semibold text-white">Launch time</h5>
                                <p class="mt-2 mb-4 text-blueGray-400">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="relative block pt-24 lg:pt-0 ">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48 ">
                            <div class="w-full lg:w-6/12 px-4 ">
                                <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg from-[#FF8660] to-[#8000FF]">
                                    <div class="flex-auto p-5 lg:p-10">
                                        <h4 class="text-2xl font-semibold">Want to work with us?</h4>
                                        <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                            Complete this form and we will get back to you in 24 hours.
                                        </p>
                                        <div class="relative w-full mb-3 mt-8">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="full-name">Full Name</label><input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Full Name" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="email">Email</label><input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
                                        </div>
                                        <div class="relative w-full mb-3">
                                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" for="message">Message</label><textarea rows="4" cols="80" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Type a message..."></textarea>
                                        </div>
                                        <div class="text-center mt-6">
                                            <button class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="relative bg-blueGray-800 pt-8 pb-6 mt-1">
                        <div class="container mx-auto px-4">
                            <div class="flex flex-wrap items-center md:justify-between justify-center">
                                <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div class="text-sm text-white font-semibold py-1">
                                        Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-white hover:text-gray-600" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-white hover:text-blueGray-600" target="_blank"> Creative Tim</a>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>


        </>
    )
}
