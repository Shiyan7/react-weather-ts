import Head from 'next/head'
import { FC } from 'react'
import { Header } from '../Header/Header'

export const MainLayout: FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}