import { FC, ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}