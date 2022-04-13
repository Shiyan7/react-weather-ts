import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Header } from '../Header/Header'

interface ILayout {
    children: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
        </>
    )
}