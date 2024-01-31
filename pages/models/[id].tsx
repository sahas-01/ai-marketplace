import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ModelInfoAbout from '@/sections/ModelInfoTop';
import Head from 'next/head';
import DetailAbout from '@/sections/DetailAbout';
import UseCases from '@/sections/UseCases';
import SEOHead from '@/utils/SEOHead';
import Image from 'next/image';

const ModelInfoPage = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<string | undefined>('about');

    // Function to handle tab change
    const handleTabChange = (tab?: string) => {
        console.log(tab);
        setActiveTab(tab);
    };

    return (
        <>
            <SEOHead titleString='AI MarketPlace-Atlan | Model Info' />
            <Navbar />
            <section className='h-auto my-5 px-20'>
                <div className="flex flex-col md:flex-row items-center mx-5">
                    <ModelInfoAbout />
                </div>
            </section>
            {/* Tabs */}
            <section className="flex items-center justify-start gap-10 mx-24 my-10">
                <button onClick={() => handleTabChange('about')} className={`text-base font-medium ${activeTab === 'about' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-white border-none'}`}>
                    About
                </button>
                <button onClick={() => handleTabChange('useCases')} className={`text-base font-medium ${activeTab === 'useCases' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-white border-none'}`}>
                    Use Cases
                </button>
                <button onClick={() => handleTabChange('reviews')} className={`text-base font-medium ${activeTab === 'reviews' ? 'text-[#0284c7] border-b-2 border-[#0284c7]' : 'text-white border-none'}`}>
                    Documentation
                </button>
            </section>

            {
                activeTab === 'about' && (
                    <section className='h-auto my-5 px-24'>
                        <DetailAbout />
                    </section>
                )
            }
            {
                activeTab === 'useCases' && (
                    <section className='h-auto my-5 px-24'>
                        <UseCases />
                    </section>
                )
            }

        </>
    );
};

export default ModelInfoPage;
