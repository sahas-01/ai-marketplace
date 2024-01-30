import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ModelInfoAbout from '@/sections/ModelInfoTop';
import Head from 'next/head';

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
            <Head>
                <title>AI Marketplace-Atlan</title>
                <meta
                    name="description"
                    content="Next.js + Tailwind CSS + TypeScript + ESLint + Prettier"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <ModelInfoAbout />

            {/* Tabs */}
            <section className="flex items-center justify-start gap-5 mx-24 my-10">
                <button
                    className={`text-white text-base font-medium cursor-pointer list-none ${activeTab === 'about' ? 'text-cyan-500' : ''}`}
                    onClick={() => handleTabChange('about')}
                >
                    About
                </button>
                <button
                    className={`text-white text-base font-medium cursor-pointer list-none ${activeTab === 'useCases' ? 'text-cyan-500' : ''}`}
                    onClick={() => handleTabChange('useCases')}
                >
                    Use Cases
                </button>
                <button
                    className={`text-white text-base font-medium cursor-pointer list-none ${activeTab === 'demo' ? 'text-cyan-500' : ''}`}
                    onClick={() => handleTabChange('demo')}
                >
                    Demo
                </button>
            </section>

        </>
    );
};

export default ModelInfoPage;
