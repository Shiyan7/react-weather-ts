
import 'swiper/css';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IWeather } from '../../../../../models/IWeather'
import styles from './Card.module.scss'
import { Tabs } from 'antd';
import { convertTimestampToDate } from '../../../../../utils/convertTimestampToDate';
import { generateIcon } from '../../../../../utils/generateIcon';

interface IWeatherProps {
  item: IWeather
}

export const Card: React.FC<IWeatherProps> = ({ item }) => {

  console.log(item);

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.left}>
          {generateIcon(item.current.weather[0].icon)}
          <h2 className={styles.title}>
            {Math.round(item.current.temp)}
            <sup>°C</sup>
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Влажность: {item.current.humidity}%</li>
            <li className={styles.listItem}>Ветер: {item.current.wind_speed} км/ч</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h2 className={styles.region}>{item.timezone}</h2>
          <h3 className={styles.country}>{item.timezone_offset}</h3>
        </div>
        
      </div>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Погода сегодня' key='1'>
          <Swiper
            spaceBetween={19}
            slidesPerView='auto'
          >
            {item?.hourly?.map((el, idx) => (
                <SwiperSlide style={{width: 'auto'}} key={idx}>
                  <div className={styles.slide}>
                    <span className={styles.date}>{convertTimestampToDate(el.dt, 'HH:mm')}</span>
                    {generateIcon(el.weather[0].icon)}
                    <span className={styles.temp}>{Math.round(el.temp)} <sup>°</sup></span>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </Tabs.TabPane>
        <Tabs.TabPane tab='Погода на неделю' key='2'>
          <Swiper
            spaceBetween={19}
            slidesPerView='auto'
          >
            {item?.daily?.map((el, idx) => (
                <SwiperSlide style={{width: 'auto'}} key={idx}>
                  <div className={styles.slide}>
                    <span className={styles.date}>{convertTimestampToDate(el.dt, 'DD.MM')}</span>
                    {generateIcon(el.weather[0].icon)}
                    <span className={styles.temp}>{Math.round(el.temp.day)} <sup>°</sup></span>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}