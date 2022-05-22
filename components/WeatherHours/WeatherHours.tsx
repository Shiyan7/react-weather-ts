import { FC } from 'react'
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IHourly } from '../../types/IWeather';
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate'
import { generateIcon } from '../../helpers/generateIcon'
import { Air } from '@mui/icons-material';
import styles from './WeatherHours.module.scss'
import 'swiper/css';

interface WeatherHoursProps {
    hours: IHourly[] | undefined
}

export const WeatherHours: FC<WeatherHoursProps> = ({hours}) => {
  return (
    <div className={styles.container}>
        <Swiper
            modules={[FreeMode]}
            spaceBetween={20}
            slidesPerView={4}
            freeMode
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
      </div>
  )
}
