import React from 'react'
import { UseCasesProps } from '@/interfaces'

const UseCases: React.FC<UseCasesProps> = ({ useCases }) => {
    const useCasesFormatted = useCases?.split('.');
    console.log(useCasesFormatted);
    return (
        <div className="mx-auto container">
            <h1 className='text-lg text-white font-bold'>
                The following are the use cases of this model:
            </h1>
            <div className="my-5 text-white">
                {
                    useCasesFormatted?.map((useCase, index) => (
                        <div key={index}>
                            <p className='text-base'>
                                {useCase}
                            </p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default UseCases