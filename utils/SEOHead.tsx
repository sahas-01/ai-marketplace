import Head from 'next/head'
import React from 'react'
import { SEOHeadProps } from '@/interfaces'

const SEOHead = ({ titleString, description }: SEOHeadProps) => {
    return (
        <Head>
            <title>{titleString}</title>
            <meta
                name="description"
                content={description}
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default SEOHead