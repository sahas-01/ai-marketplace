import React from 'react'
import { DetailAboutProps } from '@/interfaces'

const DetailAbout: React.FC<DetailAboutProps> = ({ longDescription }) => {
    return (
        <div className="mx-auto container">
            <p className='text-base text-white'>
                {longDescription}
            </p>
            <hr className='my-5 border-[#2B2F3D]' />
        </div>
    )
}

export default DetailAbout