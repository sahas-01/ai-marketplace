import React from 'react'

const UseCases = () => {
    return (
        <div className="mx-auto container">
            <h1 className='text-lg text-white'>
                The following are the use cases of this model:
            </h1>
            <div className="my-5">
                <span className='text-base text-white border-b-2 border-white'>
                    Healthcare:
                </span>
                <p className='text-base text-white'>
                    This model can be used to predict the disease based on the symptoms.
                </p>
                <li className='text-base text-white underline'>
                    Finance:
                </li>
                <p className='text-base text-white'>
                    This model can be used to predict the stock prices based on the past data.
                </p>
                <li className='text-base text-white underline'>
                    Marketing:
                </li>
                <p className='text-base text-white'>
                    This model can be used to predict the customer churn based on the past data.
                </p>
            </div>

        </div>
    )
}

export default UseCases