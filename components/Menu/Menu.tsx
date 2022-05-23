import { SwipeableDrawer } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate';
import { generateIcon } from '../../helpers/generateIcon';
import { useTypedSelector } from '../../hooks/redux';
import { toggleMenu } from '../../store/reducers/menuSlice';
import styles from './Menu.module.scss';

export const Menu = () => {

    const { isOpenMenu } = useTypedSelector(state => state.menuReducer)
    const { data } = useTypedSelector(state => state.weatherReducer)
    const dispatch = useDispatch()
    const handleToggle = () => dispatch(toggleMenu())

    return (

        <SwipeableDrawer
            anchor='bottom'
            open={isOpenMenu}
            onClose={handleToggle}
            onOpen={handleToggle}
        >
            <div className={styles.container}>
                <Swiper
                    className={styles.slider}
                    spaceBetween={15}
                    slidesPerView='auto'
                >
                    {data?.daily?.map((el, idx) => (
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