import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DemoSection = () => {
    const [text, setText] = useState('');
    const [summarizedText, setSummarizedText] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading state of API call

    const handleFeatureTest = async () => {
        if (!isLoading) { // Check if API call is already in progress
            try {
                setIsLoading(true); // Set loading state to true
                const res = await fetch(`/api/summarize`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: text
                    })
                });
                const data = await res.json();
                setSummarizedText(data.result);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false); // Reset loading state regardless of success or failure
            }
        }
    };

    return (
        <>
            <textarea
                className='w-full h-40 p-5 bg-slate-800 rounded-lg focus:border-none border-none'
                placeholder='Enter your text here'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={handleFeatureTest}
                className={`bg-blueLight text-white px-5 py-2 rounded-lg mt-5 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading} // Disable button when loading
            >
                {isLoading ? 'Processing...' : 'Try it out'}
            </button>
            {
                summarizedText ? (
                    <div className='mt-5'>
                        <h3 className='text-white text-xl font-semibold'>Summarized Text:</h3>
                        <p className='text-white mt-2'>{summarizedText}</p>
                    </div>
                )
                    : <p className='text-white mt-5'>No summarized text available</p>
            }
            <ToastContainer theme='dark' />
        </>
    );
};

export default DemoSection;