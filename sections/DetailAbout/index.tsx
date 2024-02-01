import React from 'react'
import { DetailAboutProps } from '@/interfaces'

const DetailAbout: React.FC<DetailAboutProps> = ({ longDescription }) => {
    return (
        <div className="mx-auto container">
            <p className='text-base text-white'>
                {longDescription}
            </p>
            <hr className='my-5 border-borderColor' />
        </div>
    )
}

export default DetailAbout