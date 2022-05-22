import { FC } from 'react';
import { SwipeableDrawer } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IDaily } from '../../types/IWeather';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate';
import { generateIcon } from '../../helpers/generateIcon';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './Menu.module.scss';

interface MenuProps {
    content: IDaily[] | undefined
}

export const Menu: FC<MenuProps> = ({content}) => {

    const {isOpenMenu} = useTypedSelector(state => state.menuReducer)
    const {toggleMenu} = useActions()

    const handleToggle = () => toggleMenu()

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