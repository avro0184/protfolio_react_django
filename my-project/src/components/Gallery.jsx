import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Gallery() {

    const [images, setimages] = useState([])
    async function Student() {
        try {
            axios.get("http://localhost:8000/api/image/")
                .then((response) => setimages(response.data))
                .catch((err) => console.log(err))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        Student()
    }, [])

    return (
        <>
            <div class='mx-auto bg-[#161513] pt-6 pb-3'>

                <div className="mx-auto px-2 my-1">
                    <h2 className="text-4xl bg-gray-700 p-4 rounded-sm text-white text-center">GALLERY</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        {images.map((i, index) => (
                            <div key={index} className="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500 hover:bg-red-700">
                                <img className="w-full rounded-sm bg-red-500" src={i.image} alt={`Image ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>





                {/* <div class="mx-auto px-2 ">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                        <div class="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img class="w-full rounded-sm" src="https://images.unsplash.com/photo-1636548646163-a14de6514ce0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></div>
                        <div class="flex justify-center text-6xl border-1 border-gray-300 rounded-sm p-2 bg-gray-500"><img class="w-full rounded-sm" src="https://images.unsplash.com/photo-1636548646163-a14de6514ce0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" /></div>
                    </div>
                </div> */}


            </div>
        </>
    )
}
