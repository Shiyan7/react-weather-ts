import { useAppDispatch} from '../../hooks/redux';
import { menuSlice } from '../../store/reducers/menuSlice';
import styles from './Header.module.scss'
import {FiMoreVertical, FiPlus} from 'react-icons/fi'
import React from 'react';
import { Skeleton } from '@mui/material';

interface IHeader {
    title: string | undefined
    isLoading: boolean
}

export const Header: React.FC<IHeader> = ({title, isLoading}) => {

    const {toggleMenu} = menuSlice.actions
    const dispatch = useAppDispatch()

    const Loader = () => (
        <Skeleton sx={{ bgcolor: '#6C7590', width: '150px', height: '20px' }} color='inherit' />
    )

    return (

        <div className={styles.header}>
            <div className={styles.container}>
                <button className={styles.button}>
                    <FiPlus />
                </button>
                <h1 className={styles.title}>
                    {isLoading ? <Loader /> : title}
                </h1>
                <button className={styles.button}>
                    <FiMoreVertical />
                </button>
            </div>
        </div>
    )
}


{/* <Menu theme='dark' mode='horizontal'>
    <Menu.Item key='map'>
        <Link href='/map'>Map</Link>
    </Menu.Item>
    <Menu.Item key='about'>
        <Link href='/about'>About</Link>
    </Menu.Item>
</Menu> */}



{/* <Col>
    <Select
        defaultValue='si'
        style={{ marginRight: '20px', verticalAlign: 'middle' }}>
        <Select.Option value='si'>℃, kph</Select.Option>
        <Select.Option value='us'>℉, mph</Select.Option>
    </Select>
    <Button
        type='primary'
        shape='circle'
        icon={<GithubOutlined />}
        size='large'
        href='https://github.com/Shiyan7/react-weather-ts'
    />
</Col> */}