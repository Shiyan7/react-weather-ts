import { FC } from 'react'
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate'
import { generateIcon } from '../../helpers/generateIcon'
import { Air } from '@mui/icons-material';
import { useTypedSelector } from '../../hooks/redux';
import styles from './WeatherHours.module.scss'
import 'swiper/css';
import { convertTemp } from '../../helpers/convertTemp';
import { convertSpeed } from '../../helpers/convertSpeed';

export const WeatherHours = () => {

    const {data} = useTypedSelector(state => state.weatherReducer)
    const {unitTemp, unitSpeed} = useTypedSelector(state => state.unitReducer)
    
    return (
        <div className={styles.container}>
            <Swiper
                modules={[FreeMode]}
                spaceBetween={20}
                slidesPerView={4}
                freeMode
            >
                {data?.hourly?.map((el, idx) => (
                    <SwiperSlide style={{width: 'auto'}} key={idx}>
                        <div className={styles.item}>
                            <span className={styles.time}>
                                {idx === 0 ? 'Сейчас' : convertTimestampToDate(el.dt)}
                            </span>
                            <span className={styles.temp}>{convertTemp(el.temp, unitTemp)} <sup>°</sup></span>
                            {generateIcon(el.weather[0].icon)}
                            <div className={styles.windSpeed}>
                                <Air />
                                <span className={styles.windSpeedValue}>{convertSpeed(el.wind_speed, unitSpeed)} {unitSpeed}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
