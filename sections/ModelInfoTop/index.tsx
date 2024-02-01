import Image from 'next/image'
import React from 'react'
import { ModelInfoAboutProps } from '@/interfaces'

const ModelInfoAbout: React.FC<ModelInfoAboutProps> = ({ title, shortDescription, category, developedBy, downloads, stars, cover }) => {

    console.log(title, shortDescription, category, developedBy, downloads, stars, cover);

    return (
        <>
            <Image src={cover ? cover : 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                alt='feature-bg' width={250} height={250} />
            <div className="flex flex-wrap -mx-[100px] flex-col gap-5">
                <h4 className={`text-xl font-bold px-3 py-0.5 text-white`}>{title}</h4>
                <h6 className='text-base font-medium text-[#B2B4C6] px-3 py-2'>{shortDescription}</h6>
                <div className='flex flex-col md:flex-row items-center gap-x-2 px-3 py-3'>
                    <span className={`text-sm font-medium text-white bg-gray-700 px-3 py-1 rounded-xl`}>{category}</span>
                    <p className='text-sm font-medium text-white'>Developed by:</p>
                    <span className={`text-sm font-medium text-[#0284c7]`}>{developedBy}</span>
                </div>
                <div className='flex'>
                    <p className='text-sm font-medium text-white px-5'>Stars:</p>
                    <span className={`text-sm font-medium text-[#0284c7]`}>{stars}</span>
                    <p className='text-sm font-medium text-white px-5'>Downloads:</p>
                    <span className={`text-sm font-medium text-[#0284c7]`}>{downloads}</span>
                </div>
            </div>
        </>
    )
}

export default ModelInfoAbout