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
            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}