import Image from 'next/image'
import React from 'react'

const ModelInfoAbout = () => {
    return (
        <div className="flex items-center mx-5">
            <Image src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='feature-bg' width={250} height={250} />
            <div className="flex flex-grow flex-col gap-x-5">
                <h4 className={`text-sm font-medium mt-2 px-3 py-1.5 text-[#B2B4C6]`}>Image Captioning</h4>
                <h6 className='text-base font-medium text-white px-3 py-1.5'>This application captions the images provided.</h6>
                <div className='flex items-center gap-x-2 my-1.5 px-3 py-1.5'>
                    <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Text Recognition</span>
                    <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Text Recognition</span>
                    <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Text Recognition</span>
                    <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Text Recognition</span>
                </div>
            </div>
        </div>
    )
}

export default ModelInfoAbout