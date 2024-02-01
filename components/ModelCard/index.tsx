import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { Router } from 'next/router';
import { useRouter } from 'next/navigation';
import { ModelData } from '@/interfaces';

const ModelCard: React.FC<{ model: ModelData }> = ({ model }) => {

    const router = useRouter();

    return (
        <div className='relative bg-modelCardBg rounded-[20px] shadow-xl'>
            <div className="flex flex-col">
                <div className="flex items-center justify-start mx-5 mt-1.5 gap-x-5">
                    <div className="flex flex-col">
                        <h4 className={`text-base font-medium mt-2 text-[#B2B4C6]`}>{model.title}</h4>
                        <div className="flex items-center gap-x-2 my-1.5">
                            <span className={`text-xs font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>{
                                model.category ? model.category : 'Text Recognition'
                            }</span>
                            {model.isDemo &&
                                <span className={`text-xs font-medium text-white bg-gray-700 px-3 py-1 rounded-lg`}>
                                    <div className="flex gap-x-2 items-center">
                                        <Image src='/assets/demo-icon.svg' width={15} height={15} alt="demo" /> <span>Demo available</span>
                                    </div>
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <hr className="border-[#2B2F3D] mx-5" />
                <p className="text-[#B2B4C6] text-sm px-5 py-2.5">
                    {
                        model.shortDescription ? model.shortDescription : 'This is the short description of the model.'
                    }
                </p>
                <div className="flex items-center gap-x-3.5 mx-5 my-1.5">
                    <p className="flex text-[#B2B4C6] text-xs">
                        <span className="font-medium">Updated: &nbsp;</span> {
                            //convert updatedAt to the format 23rd July 2021
                            model.updatedAt ? new Date(model.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '23rd July 2021'
                        }
                    </p>
                    <p className="flex gap-x-1 text-[#B2B4C6] text-xs">
                        <Image src='/assets/downloads-icon.svg' alt='downloads' width={17.5} height={17.5} />
                        {
                            model.downloads ? model.downloads : 0
                        }
                    </p>
                    <p className="flex gap-x-1 text-[#B2B4C6] text-xs">
                        <Image src='/assets/star-icon.svg' alt='likes' width={15.5} height={15.5} />
                        {
                            model.stars ? model.stars : 0
                        }
                    </p>
                </div>
                <p className="flex gap-x-1 text-[#B2B4C6] text-xs mx-5 my-1.5">
                    Developed by:
                    <span className="text-blueLight font-medium">
                        {
                            model.developedBy ? model.developedBy : 'Atlan'
                        }
                    </span>
                </p>
            </div>
            <button onClick={() => {
                router.push(`/models/${model._id}`)
            }}
                className="flex text-sm text-white bg-blueLight hover:bg-blue-600 font-medium px-4 py-1.5 rounded-lg w-auto m-5">
                View more
            </button>
        </div>
    );
}

export default ModelCard