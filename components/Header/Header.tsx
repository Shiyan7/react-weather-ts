import { Skeleton, Box, IconButton } from '@mui/material';
import { FiMoreVertical, FiPlus } from 'react-icons/fi'
import { useTypedSelector } from '../../hooks/redux';
import styles from './Header.module.scss'

export const Header = () => {

    const {data, isLoading, error} = useTypedSelector(state => state.weatherReducer)

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
                {data?.timezone}
            </h1>
            <IconButton sx={{fontSize: '20px', lineHeight: '20px', color: '#fff'}}>
                <FiMoreVertical />
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