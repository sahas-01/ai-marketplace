import React from 'react'

const DetailAbout = () => {
    return (
        <div className="mx-auto container">
            <p className='text-base text-white'>
                This is a 7 billion parameter model built by AI Planet. Inspired by llama, we have built fine-tuned version of llama7b with qlora.
                The training procedure and framework versions are provided below along with model weighths.
            </p>
            <hr className='my-5 border-[#2B2F3D]' />
            <p className='text-base text-white underline'>
                This model has been fine-tuned on Chain of Thought datasets, which has context from mixed sources with corresponding rationale.
                The final finetuned Large Language Model(LLM) have shown enhanced capabilities of solving novel tasks by providing a reasoning.
            </p>
            <hr className='my-5 border-[#2B2F3D]' />
            <p className='text-base text-white'>
                The following `bitsandbytes` quantization config was used during training:
            </p>
            <p className='text-white text-base'>
                <ul>
                    <li>bits: 8</li>
                    <li>bits_first_conv: 8</li>
                    <li>bits_first_linear: 8</li>
                    <li>bits_embedding: 8</li>
                    <li>bits_layernorm: 8</li>
                    <li>bits_intermediate: 8</li>
                    <li>bits_output: 8</li>
                    <li>bits_attention: 8</li>
                    <li>bits_act: 8</li>
                    <li>bits_dropout: 8</li>
                    <li>bits_pooler: 8</li>
                    <li>bits_classifier: 8</li>
                    <li>bits_qat: 8</li>
                </ul>
            </p>
        </div>
    )
}

export default DetailAbout