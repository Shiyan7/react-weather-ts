import React from 'react';
import styles from './Header.module.scss'
import { Skeleton } from '@mui/material';

interface IHeader {
    title: string | undefined
    isLoading: boolean
}

export const Header: React.FC<IHeader> = ({title, isLoading}) => {

    const Loader = () => (
        <Skeleton sx={{ bgcolor: '#6C7590', width: '150px', height: '20px' }} color='inherit' />
    )

    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {isLoading ? <Loader /> : title}
                </h1>
            </div>
        </div>
    )
}