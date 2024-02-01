import Loader from '@/components/Loader';
import ModelCard from '@/components/ModelCard';
import Navbar from '@/components/Navbar';
import { ModelData } from '@/interfaces';
import SEOHead from '@/utils/SEOHead';
import { Poppins } from 'next/font/google';
import React, { useEffect, useState } from 'react';

const poppins = Poppins({
    adjustFontFallback: false,
    display: 'swap',
    style: ['italic', 'normal'],
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700']
});

const ModelsPage = () => {
    const [allModels, setAllModels] = useState([]);
    const [models, setModels] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all'); // Track active filter

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch('/api/getAllModels');
                const data = await res.json();
                setAllModels(data.models);
                setModels(data.models);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchModels();
    }, []);

    const handleFilter = (filter: string) => {
        setActiveFilter(filter); // Update active filter state

        if (filter === 'all') {
            setModels(allModels);
        } else if (filter === 'featured' || filter === 'tryitout') {
            const filteredModels = allModels.filter((model: ModelData) => {
                return model.downloads !== undefined && model.stars !== undefined && model.downloads > 2000 && model.stars > 30;
            });
            setModels(filteredModels);
        }
    };

    return (
        <main className={`${poppins.className}`}>
            <SEOHead titleString="AI Marketplace-Atlan | Models" description="AI Marketplace is a big repository of LLMs and AI models built by developers and organizations" />
            <Navbar />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-white lg:mx-20 text-4xl font-bold mt-5 mb-0.5">
                        {
                            activeFilter === 'all' ? 'All' : activeFilter === 'featured' ? 'Featured' : 'Try it out'
                        } Models</h1>
                    <div className="flex justify-start lg:mx-20 gap-x-5 items-center">
                        <button
                            onClick={() => handleFilter('all')}
                            className={`text-white px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'all' ? 'bg-gray-700' : 'bg-gray-500'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilter('featured')}
                            className={`text-white px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'featured' ? 'bg-gray-700' : 'bg-gray-500'
                                }`}
                        >
                            Featured
                        </button>
                        <button
                            onClick={() => handleFilter('tryitout')}
                            className={`text-white px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'tryitout' ? 'bg-gray-700' : 'bg-gray-500'
                                }`}
                        >
                            Try it out
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-20 my-2">
                {models.map((model: ModelData) => (
                    <ModelCard key={model._id} model={model} />
                ))}
            </div>
        </main>
    );
};

export default ModelsPage;
