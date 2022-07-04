import {Skeleton, Box, IconButton} from '@mui/material';
import {MoreVert} from '@mui/icons-material';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {useActions} from '@/hooks/useActions';
import styles from './Header.module.scss'

export const Header = () => {

    const {data, isLoading, error} = useTypedSelector(state => state.weatherReducer)
    const {toggleModal} = useActions()

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
                onClick={() => toggleModal()}
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