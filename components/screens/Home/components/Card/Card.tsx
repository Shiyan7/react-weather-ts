import React, { FC } from 'react'
import { CloudyIcon, CloudyWindIcon, NightCloudyIcon, NightRainIcon, RainIcon, RainManuIcon, SunnyCloudyIcon, SunnyIcon, SunnyRainIcon, ThunderstormsIcon } from '../../../../Icons/Icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IWeather } from '../../../../../types/IWeather'
import 'swiper/css';
import styles from './Card.module.scss'
import dayjs from 'dayjs';

interface IWeatherProps {
  item: IWeather
}

/* Простая switch case функция, которая генерирует иконку, на вход принимает пропс code (тут вся документация https://www.weatherapi.com/docs/#weather-icons) */

const generateIcon = (code: number) => {
  switch (code) {
    case 1000:
      return <SunnyIcon />
    case 1003:
      return <SunnyCloudyIcon />
    case 1006:
      return <NightCloudyIcon />
    case 1009:
      return <CloudyIcon />
    case 1030:
      return <CloudyWindIcon />
    case 1276:
      return <ThunderstormsIcon />
    case 1063:
      return <NightRainIcon />
    case 1183:
      return <RainIcon />
    case 1189:
        return <RainIcon />
    case 1153:
      return <RainManuIcon />
    case 1240:
      return <SunnyRainIcon />
    default: return <CloudyIcon />
  }
}

export const Card: FC<IWeatherProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
          {generateIcon(item.current.condition.code)}
          <h2 className={styles.title}>
            {Math.ceil(item.current.temp_c)}
            <sup>°C</sup>
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Влажность: {item.current.humidity}%</li>
            <li className={styles.listItem}>Ветер: {item.current.wind_kph} км/ч</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h2 className={styles.region}>{item.location.region}</h2>
          <h3 className={styles.country}>{item.location.country}</h3>
        </div>
        
      </div>
      <Swiper
        className={styles.slider}
        spaceBetween={20}
        slidesPerView='auto'
      >
        {item.forecast.forecastday.map(el =>
          el.hour.map((el, idx) => (
            <SwiperSlide style={{width: 'auto'}} key={idx}>
              <div className={styles.slide}>
                <span className={styles.date}>{dayjs.unix(el.time_epoch).format("HH:mm")}</span>
                {generateIcon(el.condition.code)}
                <span className={styles.temp}>{Math.ceil(el.temp_c)} <sup>°</sup></span>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}