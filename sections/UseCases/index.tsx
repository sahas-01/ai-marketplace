import React from 'react'
import { UseCasesProps } from '@/interfaces'

const UseCases: React.FC<UseCasesProps> = ({ useCases }) => {
    const useCasesFormatted = useCases?.split('.');
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
                            <hr 
                            style={{ 
                                border: '1px solid #3A3A3A'
                            }}
                            className='my-5'/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default UseCases