import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IWeather } from '../../../../../types/IWeather'
import 'swiper/css';
import styles from './Card.module.scss'
import dayjs from 'dayjs';

interface IWeatherProps {
  item: IWeather
}

export const Card: FC<IWeatherProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
          <img className={styles.image} src={item.current.condition.icon} />
          <h2 className={styles.title}>
            {item.current.temp_c}
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
        spaceBetween={15}
        slidesPerView='auto'
      >
        {item.forecast.forecastday.map(el =>
          el.hour.map((el, idx) => (
            <SwiperSlide style={{width: 'auto'}} key={idx}>
              <div className={styles.slide}>
                <span className={styles.date}>{dayjs.unix(el.time_epoch).format("HH:mm")}</span>
                <img className={styles.slideImage} src={el.condition.icon} />
                <span className={styles.temp}>{Math.ceil(el.temp_c)} <sup>°</sup></span>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  )
}