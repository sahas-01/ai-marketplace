import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import ModelInfoAbout from '@/sections/ModelInfoTop';
import Head from 'next/head';
import DetailAbout from '@/sections/DetailAbout';
import UseCases from '@/sections/UseCases';
import SEOHead from '@/utils/SEOHead';
import { useRouter } from 'next/router';
import { ModelData } from '@/interfaces';
import DemoSection from '@/sections/DemoSection';

const ModelInfoPage = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState<string | undefined>('about');
    const router = useRouter();
    const [modelData, setModelData] = useState({} as ModelData);
    const [isLoading, setIsLoading] = useState(true);

    // Function to handle tab change
    const handleTabChange = (tab?: string) => {
        console.log(tab);
        setActiveTab(tab);
    };
    //get the id from this page's url
    const { id } = router.query;
    const _id = id as string;
    console.log(_id);

    useEffect(() => {
        const getModelData = async () => {
            try {
                if (_id) {
                    console.log('inside fetchhhh' + _id);
                    const res = await fetch(`/api/getModelData/?_id=${_id}`);
                    const data = await res.json();
                    console.log(data);
                    setModelData(data.model);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
            }
        }
        getModelData();
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [_id]);
    return (
        <>
            <SEOHead titleString='AI MarketPlace-Atlan | Model Info' />
            <Navbar />
            <section className='h-auto my-5 px-10 lg:px-20'>
                {
                    isLoading ? (
                        <div className='flex flex-col items-center justify-center'>
                            <div className='animate-pulse'>
                            </div>
                            <div className='animate-pulse'>
                            </div>
                        </div>

                    )
                        :
                        <div className="flex flex-col md:flex-row items-center mx-5">
                            <ModelInfoAbout
                                title={modelData?.title}
                                shortDescription={modelData?.shortDescription}
                                category={modelData?.category}
                                developedBy={modelData?.developedBy}
                                downloads={modelData?.downloads || 0}
                                stars={modelData?.stars || 0}
                                status={modelData?.status}
                            />
                        </div>
                }
            </section>
            {/* Tabs */}
            <section className="flex items-center justify-center lg:justify-start gap-10 mx-6 lg:mx-24 my-10">
                <button onClick={() => handleTabChange('about')} className={`text-base font-medium ${activeTab === 'about' ? 'text-blueLight border-b-2 border-blueLight' : 'text-white border-none'}`}>
                    About
                </button>
                <button onClick={() => handleTabChange('useCases')} className={`text-base whitespace-pre font-medium ${activeTab === 'useCases' ? 'text-blueLight border-b-2 border-blueLight' : 'text-white border-none'}`}>
                    Use Cases
                </button>
                <button onClick={() => handleTabChange('usage')} className={`text-base font-medium ${activeTab === 'usage' ? 'text-blueLight border-b-2 border-blueLight' : 'text-white border-none'}`}>
                    Usage
                </button>
                {
                    modelData?.isDemo && (
                        <button
                            onClick={() => handleTabChange('tryitout')}
                            className={`text-base font-medium ${activeTab === 'tryitout' ? 'text-blueLight border-b-2 border-blueLight' : 'text-white border-none'}`}>
                            Try it out
                        </button>
                    )
                }
            </section >

            {
                activeTab === 'about' && (
                    <section className='h-auto my-5 px-7 lg:px-24'>
                        <DetailAbout
                            longDescription={modelData?.longDescription}
                        />
                    </section>
                )
            }
            {
                activeTab === 'useCases' && (
                    <section className='h-auto my-5 px-7 lg:px-24'>
                        <UseCases
                            useCases={modelData?.useCases}
                        />
                    </section>
                )
            }

            {
                activeTab === 'usage' && (
                    <section className='h-auto my-5 px-7 lg:px-24 text-white'>
                        {
                            modelData?.codeSnippet ?
                                <pre className='bg-slate-800 p-5 rounded-lg'>
                                    <code className="text-white">
                                        {modelData?.codeSnippet}
                                    </code>
                                </pre>
                                :
                                <h3 className='text-2xl font-semibold text-white'>No code snippet available</h3>
                        }
                    </section>
                )
            }
            {
                activeTab === 'tryitout' && (
                    <section className='h-auto my-5 px-7 lg:px-24 text-white'>
                        <DemoSection />
                    </section>
                )
            }

        </>
    );
};

export default ModelInfoPage;
