import {SwipeableDrawer} from '@mui/material';
import {FreeMode} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {convertTemp} from '@/helpers/convertTemp';
import {convertTimestampToDate} from '@/helpers/convertTimestampToDate';
import {generateIcon} from '@/helpers/generateIcon';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import styles from './Menu.module.scss';
import { useActions } from '@/hooks/useActions';

export const Menu = () => {

    const {isOpenMenu} = useTypedSelector(state => state.menuReducer)
    const {data} = useTypedSelector(state => state.weatherReducer)
    const {unitTemp} = useTypedSelector(state => state.unitReducer)
    const {toggleMenu} = useActions()

    return (

        <SwipeableDrawer
            anchor='bottom'
            open={isOpenMenu}
            onClose={() => toggleMenu()}
            onOpen={() => toggleMenu()}
        >
            <div className={styles.container}>
                <Swiper
                    modules={[FreeMode]}
                    className={styles.slider}
                    spaceBetween={15}
                    slidesPerView='auto'
                    freeMode
                >
                    {data?.daily?.map((el, idx) => {

                        const {dt, temp: {min, max}, weather} = el;

                        return (
                            <SwiperSlide style={{width: 'auto'}} key={idx}>
                                <div className={styles.item}>
                                    <span className={styles.day}>{convertTimestampToDate(dt, 'dd')}</span>
                                    <span className={styles.date}>{convertTimestampToDate(dt, 'DD.MM')}</span>
                                    {generateIcon(weather[0].icon)}
                                    <div className={styles.temp}>
                                        <span className={styles.tempValue}>{convertTemp(max, unitTemp)}<sup>°</sup></span>
                                        <span className={styles.tempDivider}>/</span>
                                        <span className={styles.tempValue}>{convertTemp(min, unitTemp)}<sup>°</sup></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </SwipeableDrawer>
    )
}