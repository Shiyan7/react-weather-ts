import React from 'react';
import styles from './Header.module.scss'
import { Skeleton } from '@mui/material';

interface IHeader {
    title: string | undefined
    isLoading: boolean
    isError: boolean
}

export const Header: React.FC<IHeader> = ({title, isLoading, isError}) => {

    const Loader = () => (
        <Skeleton width={150} height={20} />
    )

    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {isLoading || isError ? <Loader /> : title}
                </h1>
            </div>
        </div>
    )
}