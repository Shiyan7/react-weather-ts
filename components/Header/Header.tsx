import React from 'react';
import styles from './Header.module.scss'
import { Skeleton, Box, IconButton } from '@mui/material';
import {FiMoreVertical, FiPlus} from 'react-icons/fi'

interface IHeader {
    title: string | undefined
    isLoading: boolean
    isError: boolean
}

export const Header: React.FC<IHeader> = ({title, isLoading, isError}) => {

    const Loader = () => (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <Skeleton variant='circular' width={20} height={20}  />
            <Skeleton width={150} height={20} />
            <Skeleton variant='circular' width={20} height={20} />
        </Box>
    )

    const HeaderContent = () => (
        <>
            <IconButton sx={{fontSize: '20px', lineHeight: '20px', color: '#fff'}}>
                <FiPlus />
            </IconButton>
            <h1 className={styles.title}>
                {title}
            </h1>
            <IconButton sx={{fontSize: '20px', lineHeight: '20px', color: '#fff'}}>
                <FiMoreVertical />
            </IconButton>
        </>
    )

    return (

        <div className={styles.header}>
            <div className={styles.container}>
                {isLoading || isError ? <Loader /> : <HeaderContent />}
            </div>
        </div>
    )
}