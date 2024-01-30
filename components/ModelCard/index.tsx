import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const ModelCard = () => {
    return (
        <div className='relative bg-[#1E2129] rounded-[20px] border-[1px] border-[#24282F]'>
            <div className="flex flex-col">
                <div className="flex items-center justify-start m-5 gap-x-5">
                    <Image src='/assets/ai-search-logo.svg' alt='feature-bg' width={70} height={70} />
                    <div className="flex flex-col">
                        <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>Financial Data</h4>
                    </div>
                </div>
                <hr className="border-[#2B2F3D] mx-5" />
                <p className="text-[#B2B4C6] text-base font-medium p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus soluta iste aspernatur nostrum dolor et illo laboriosam eum nulla nam.
                </p>
            </div>
        </div>
    );
}

export default ModelCard