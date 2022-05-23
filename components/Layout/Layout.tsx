import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { useEffect } from 'react';
import { fetchWeather } from '../../services/fetchWeather';
import { usePosition } from 'use-position';
import { useDispatch } from 'react-redux';
import styles from './Layout.module.scss'

interface LayoutProps {
    children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

    const { latitude, longitude } = usePosition(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if(latitude && longitude) dispatch(fetchWeather({lat: latitude, lon: longitude}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [latitude, longitude])

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