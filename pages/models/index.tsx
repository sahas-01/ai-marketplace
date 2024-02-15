import React, { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
import ModelCard from '@/components/ModelCard';
import Navbar from '@/components/Navbar';
import { ModelData } from '@/interfaces';
import SEOHead from '@/utils/SEOHead';
import { Poppins } from 'next/font/google';

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
    const [currentPage, setCurrentPage] = useState(1);
    const modelsPerPage = 10;

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await fetch('/api/getAllModels');
                const data = await res.json();
                setAllModels(data.models);
                setModels(data.models);
                setIsLoading(false);
            } catch (err) {
                // console.log(err);
            }
        };
        fetchModels();
    }, []);

    const handleFilter = (filter: string) => {
        setActiveFilter(filter); // Update active filter state
        setCurrentPage(1); // Reset to first page when filter changes

        if (filter === 'all') {
            setModels(allModels);
        } else if (filter === 'featured') {
            const filteredModels = allModels.filter((model: ModelData) => {
                return model.downloads !== undefined && model.stars !== undefined && model.downloads > 2000 && model.stars > 30;
            });
            setModels(filteredModels);
        } else if (filter === 'tryitout') {
            const filteredModels = allModels.filter((model: ModelData) => {
                return model.isDemo;
            });
            setModels(filteredModels);
        }
    };

    // Logic to get current models based on pagination
    const indexOfLastModel = currentPage * modelsPerPage;
    const indexOfFirstModel = indexOfLastModel - modelsPerPage;
    const currentModels = models.slice(indexOfFirstModel, indexOfLastModel);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <main className={`${poppins.className}`}>
            <SEOHead titleString="AI Marketplace | Models" description="AI Marketplace is a big repository of LLMs and AI models built by developers and organizations" />
            <Navbar />
            {isLoading ? (
                <div className="relative flex justify-center items-center">
                    <Loader />
                </div>
            ) : (
                <div className="flex flex-col">
                    <h1 className="text-white mx-20 text-4xl font-bold mt-5 mb-0.5">
                        {
                            activeFilter === 'all' ? 'All' : activeFilter === 'featured' ? 'Featured' : 'Ready to try'
                        } Models</h1>
                    <div className="flex flex-wrap justify-start mx-20 gap-x-5 items-center">
                        <button
                            onClick={() => handleFilter('all')}
                            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'all' ? 'bg-white text-black' : 'bg-neutral-700 text-white'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleFilter('featured')}
                            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'featured' ? 'bg-white text-black' : 'bg-neutral-700 text-white'
                                }`}
                        >
                            Featured
                        </button>
                        <button
                            onClick={() => handleFilter('tryitout')}
                            className={`px-3.5 py-1.5 rounded-xl text-sm font-medium my-5 ${activeFilter === 'tryitout' ? 'bg-white text-black' : 'bg-neutral-700 text-white'
                                }`}
                        >
                            Try it out
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-14 sm:mx-20 my-2">
                {currentModels.map((model: ModelData) => (
                    <ModelCard key={model._id} model={model} />
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-5">
                <ul className="flex space-x-2">
                    {Array.from({ length: Math.ceil(models?.length / modelsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            className={`px-3 py-1 rounded-md mx-1 ${currentPage === index + 1 ? 'bg-blueLight text-white' : 'bg-slate-600 text-white'}`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default ModelsPage;
