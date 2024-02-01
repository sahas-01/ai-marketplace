import Loader from '@/components/Loader';
import ModelCard from '@/components/ModelCard';
import Navbar from '@/components/Navbar';
import { ModelData } from '@/interfaces';
import SEOHead from '@/utils/SEOHead';
import { Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react'


const poppins = Poppins({
    adjustFontFallback: false,
    display: 'swap',
    style: ['italic', 'normal'],
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

const ModelsPage = () => {

    const [models, setModels] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch('/api/getAllModels')
                const data = await res.json()
                setModels(data.models)
                setIsLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchModels()
    }, [])

    console.log(models)

    return (
        <main className={`${poppins.className}`}>
            <SEOHead titleString='AI Marketplace-Atlan | Models' description='AI Marketplace is a big repository of 
            LLMs and AI models built by developers and organizations' />
            <Navbar />
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-white text-4xl font-bold my-10">Models</h1>
                    </div>
                )
            }
            < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-10">
                {
                    models?.map((model: ModelData) => (
                        <ModelCard key={model._id} model={model} />
                    ))

                }
            </div>
        </main >
    )
}

export default ModelsPage