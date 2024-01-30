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
        <div className='relative bg-[#1E2129] rounded-[20px] shadow-xl'>
            <div className="flex flex-col">
                <div className="flex items-center justify-start m-5 gap-x-5">
                    <div className="flex flex-col">
                        <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>Financial Data</h4>
                        <div className="flex items-center gap-x-2 my-1.5">
                            <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>By Atlan</span>
                            <span className={`text-sm font-medium text-white bg-gray-500 px-3 py-1.5 rounded-xl`}>Free</span>
                        </div>
                    </div>
                </div>
                <hr className="border-[#2B2F3D] mx-5" />
                <p className="text-[#B2B4C6] text-base font-medium p-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam fringilla non.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus soluta iste aspernatur nostrum dolor et illo laboriosam eum nulla nam.
                </p>
            </div>
            <button onClick={() => {
                router.push(`/models/${id}`)
            }}
                className="flex text-white bg-[#0284c7] hover:bg-blue-600 font-medium px-5 py-2.5 rounded-lg w-auto m-5">
                View more
            </button>
        </div>
    );
}

export default ModelCard