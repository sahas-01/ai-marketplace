import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';

interface ModelCardProps {
    id: string;
    name?: string;
    description?: string;
    price?: number;
}

const ModelCard = ({ id }: ModelCardProps) => {

    const router = useRouter();

    return (
        <div className='relative bg-[#242731] rounded-[20px] shadow-xl'>
            <div className="flex flex-col">
                <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
                    <div className="flex flex-col">
                        <h4 className={`text-lg font-medium mt-2 text-[#B2B4C6]`}>Financial Data</h4>
                        <div className="flex items-center gap-x-2 my-1.5">
                            <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>By Atlan</span>
                            <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Free</span>
                        </div>
                    </div>
                </div>
                <hr className="border-[#2B2F3D] mx-5" />
                <p className="text-[#B2B4C6] text-sm px-5 py-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                </p>
                <div className="flex items-center gap-x-3.5 mx-5 my-1.5">
                    <p className="flex text-[#B2B4C6] text-xs">
                        <span className="font-medium">Updated: &nbsp;</span> Dec 15,2023
                    </p>
                    <p className="flex gap-x-1 text-[#B2B4C6] text-xs">
                        <Image src='/assets/downloads-icon.svg' alt='downloads' width={17.5} height={17.5} />
                        1.21M
                    </p>
                    <p className="flex gap-x-1 text-[#B2B4C6] text-xs">
                        <Image src='/assets/star-icon.svg' alt='likes' width={15.5} height={15.5} />
                        1.98k
                    </p>
                </div>
                <p className="flex gap-x-1 text-[#B2B4C6] text-xs mx-5 my-1.5">
                    Developed by:
                    <span className="text-[#0284c7] font-medium">
                        Atlan
                    </span>
                </p>
            </div>
            <button onClick={() => {
                router.push(`/models/${id}`)
            }}
                className="flex text-sm text-white bg-[#0284c7] hover:bg-blue-600 font-medium px-4 py-1.5 rounded-lg w-auto m-5">
                View more
            </button>
        </div>
    );
}

export default ModelCard