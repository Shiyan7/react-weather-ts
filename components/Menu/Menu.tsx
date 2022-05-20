import { Drawer, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { IDaily } from '../../types/IWeather';
import { menuSlice } from '../../store/reducers/menuSlice';
import { convertTimestampToDate } from '../../utils/convertTimestampToDate';
import { generateIcon } from '../../utils/generateIcon';
import styles from './Menu.module.scss';

interface IMenuProps {
    content: IDaily[] | undefined
}

export const Menu: React.FC<IMenuProps> = ({content}) => {

    const {isOpenMenu} = useAppSelector(state => state.menuReducer)
    const {toggleMenu} = menuSlice.actions
    const dispatch = useAppDispatch()

    return (

        <SwipeableDrawer
            anchor='bottom'
            open={isOpenMenu}
            onClose={() => dispatch(toggleMenu())}
            onOpen={() => dispatch(toggleMenu())}
        >
            <div className={styles.container}>
                <Swiper
                    className={styles.slider}
                    spaceBetween={15}
                    slidesPerView='auto'
                >
                    {content?.map((el, idx) => (
                        <SwiperSlide className={styles.item} key={idx}>
                            <span className={styles.day}>{convertTimestampToDate(el.dt, 'dd')}</span>
                            <span className={styles.date}>{convertTimestampToDate(el.dt, 'DD.MM')}</span>
                            {generateIcon(el.weather[0].icon)}
                            <div className={styles.temp}>
                                <span className={styles.tempValue}>{Math.round(el.temp.max)}<sup>°</sup></span>
                                <span className={styles.tempDivider}>/</span>
                                <span className={styles.tempValue}>{Math.round(el.temp.min)}<sup>°</sup></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </SwipeableDrawer>
    )
}