import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IHourly } from '../../types/IWeather';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate'
import { generateIcon } from '../../helpers/generateIcon'
import styles from './WeatherHours.module.scss'
import { Air } from '@mui/icons-material';
import 'swiper/css';

interface WeatherHoursProps {
    hours: IHourly[] | undefined
}

export const WeatherHours: FC<WeatherHoursProps> = ({hours}) => {
  return (
    <Swiper
        className={styles.slider}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={4}
    >
        {hours?.map((el, idx) => (
            <SwiperSlide style={{width: 'auto'}} key={idx}>
                <div className={styles.item}>
                    <span className={styles.time}>
                        {idx === 0 ? 'Сейчас' : convertTimestampToDate(el.dt, 'HH:mm')}
                    </span>
                    <span className={styles.temp}>{Math.round(el.temp)} <sup>°</sup></span>
                    {generateIcon(el.weather[0].icon)}
                    <div className={styles.windSpeed}>
                        <Air />
                        <span className={styles.windSpeedValue}>{el.wind_speed} км/ч</span>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}
