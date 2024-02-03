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
    const [allModels, setAllModels] = useState<ModelData[]>([]);
    const [models, setModels] = useState<ModelData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('all'); // Track active filter
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch(process.env.NEXT_PUBLIC_MOCKDATA_API as string);
                const data = await res.json();
                console.log(data);
                setAllModels(data);
                setModels(data.slice(0, 10)); // Display the first 10 items initially
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
            setModels(allModels.slice((currentPage - 1) * 10, currentPage * 10));
        } else if (filter === 'featured') {
            const filteredModels = allModels.filter((model: ModelData) => {
                return model.downloads !== undefined && model.stars !== undefined && model.downloads > 2000 && model.stars > 30;
            });
            setModels(filteredModels.slice((currentPage - 1) * 10, currentPage * 10));
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        handleFilter(activeFilter);
    };

    return (
        <main className={`${poppins.className}`}>
            <SEOHead titleString="AI Marketplace-Atlan | Models" description="AI Marketplace is a big repository of LLMs and AI models built by developers and organizations" />
            <Navbar />
            {isLoading ? (
                <div className="relative flex justify-center items-center">
                    <Loader />
                </div>
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-white mx-20 text-4xl font-bold mt-5 mb-0.5">
                        {
                            activeFilter === 'all' ? 'All' : activeFilter === 'featured' && 'Featured'
                        } Models</h1>
                    <div className="flex flex-wrap justify-start mx-20 gap-x-5 items-center">
                        <button
                            onClick={() => handleFilter('all')}
                            className={`text-white px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'all' ? 'bg-white text-black' : 'bg-neutral-700 text-white'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilter('featured')}
                            className={`text-white px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'featured' ? 'bg-white text-black' : 'bg-neutral-700 text-white'
                                }`}
                        >
                            Featured
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 sm:mx-20 my-2">
                {models.map((model: ModelData) => (
                    <ModelCard key={model.title} model={model} />
                ))}
            </div>
            <div className="flex justify-center my-5">
                {Array.from({ length: Math.ceil(allModels.length / 10) }).map((_, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 rounded-md mx-1 ${currentPage === index + 1 ? 'bg-blueLight text-white' : 'bg-slate-600 text-white'}`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </main>
    );
};

export default ModelsPage;
