import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div class="bg-[#161513] p-6 font-mono">
                <div class="bg-white flex flex-col font-sans rounded-lg">
                    <div class="container mx-auto px-8 ">
                        <header class="flex flex-col sm:flex-row items-center justify-between py-2 relative">
                            <h3 class="text-2xl font-bold uppercase text-blue-900">Logo</h3>
                            <nav class="hidden md:flex text-lg">
                                <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Home</a>
                                <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Services</a>
                                <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">About</a>
                                <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">Contact</a>
                                <a href="#" class="text-gray-800 hover:text-purple-300 py-3 px-6">FAQ</a>
                            </nav>
                            <button class="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
                                <span class="w-5 h-px mb-1 bg-orange-500"></span>
                                <span class="w-5 h-px mb-1 bg-orange-500"></span>
                                <span class="w-5 h-px mb-1 bg-orange-500"></span>
                            </button>
                        </header>
                    
                            
                    </div>
                </div>
            </div>
        </>
    )
}
