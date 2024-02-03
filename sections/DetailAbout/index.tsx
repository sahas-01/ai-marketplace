import React from 'react'
import { DetailAboutProps } from '@/interfaces'

const DetailAbout: React.FC<DetailAboutProps> = ({ longDescription }) => {
    return (
        <div className="mx-auto container">
            <p className='text-base text-white'>
                {longDescription}
            </p>
        </div>
    )
}

export default DetailAbout