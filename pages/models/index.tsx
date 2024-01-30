import ModelCard from '@/components/ModelCard';
import Navbar from '@/components/Navbar';
import SEOHead from '@/utils/SEOHead';
import { Poppins } from 'next/font/google';
import React from 'react'


const poppins = Poppins({
    adjustFontFallback: false,
    display: 'swap',
    style: ['italic', 'normal'],
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

const ModelsPage = () => {
    return (
        <main className={`${poppins.className}`}>
            <SEOHead titleString='AI Marketplace-Atlan | Models' description='AI Marketplace is a big repository of 
            LLMs and AI models built by developers and organizations' />
            <Navbar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10">
                <ModelCard id='1' />
                <ModelCard id='1' />
                <ModelCard id='1' />
                <ModelCard id='1' />
                <ModelCard id='1' />
                <ModelCard id='1' />
            </div>
        </main>
    )
}

export default ModelsPage