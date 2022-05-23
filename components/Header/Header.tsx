import { MoreVert } from '@mui/icons-material';
import { Skeleton, Box, IconButton, Modal, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/redux';
import { toggleModal } from '../../store/reducers/modalSlice';
import styles from './Header.module.scss'

export const Header = () => {

    const {data, isLoading, error} = useTypedSelector(state => state.weatherReducer)
    const dispatch = useDispatch()
    const handleOpen = () => dispatch(toggleModal())

    const Loader = () => (
        <Box sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%'}}>
            <Skeleton
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                width={150}
                height={20}
            />
            <Skeleton
                variant='circular'
                width={20}
                height={20}
            />
        </Box>
    )

    const HeaderContent = () => (
        <>
            <h1 className={styles.title}>
                {data?.timezone}
            </h1>
            <IconButton
                onClick={handleOpen}
                sx={{fontSize: '20px', lineHeight: '20px', color: '#fff'}}
            >
                <MoreVert />
            </IconButton>
        </>
    )

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                {isLoading || error ? <Loader /> : <HeaderContent />}
            </div>
        </div>
    )
}