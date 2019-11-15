
import React from 'react'
import Head from 'next/head';

export default function StatusBar({backgroundColor, barStyle}) {

    return (
        <Head>
            <meta name="theme-color" content={backgroundColor} />
        </Head>
    )
}
