
import 'swiper/css';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Card.module.scss'
import { Layout, Skeleton, Tabs } from 'antd';
import { convertTimestampToDate } from '../../utils/convertTimestampToDate';
import { generateIcon } from '../../utils/generateIcon';
import { IWeather } from '../../models/IWeather';
import { TiLocationArrowOutline } from 'react-icons/ti';

interface ICard {
  item: IWeather
  isLoading: boolean
}

export const Card: React.FC<ICard> = ({item, isLoading}) => {

  const CardLoader = () => (
    <Skeleton
      paragraph={{
        rows: 7,
      }}
    />
  )
    
  const { temp, timezone, humidity, wind_speed, hourly, daily } = {...item, ...item?.current};

  console.log({...item?.current, ...item});

  const CardContent = () => (
    <>
      <div className={styles.top}>
        <div className={styles.left}>
          {generateIcon(item.current.weather[0].icon)}
          <h2 className={styles.title}>
            {Math.round(Number(temp))}
            <sup>°C</sup>
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Влажность: {humidity}%</li>
            <li className={styles.listItem}>Ветер: {wind_speed} км/ч</li>
          </ul>
        </div>
        <div className={styles.right}>
          <h2 className={styles.region}>{timezone}</h2>
          <h3 className={styles.country}>UK</h3>
        </div>
        
      </div>
      <Tabs defaultActiveKey='1'>
        <Tabs.TabPane tab='Погода на 48 часов' key='1'>
          <Swiper
            spaceBetween={19}
            slidesPerView='auto'
          >
            {hourly?.map((el, idx) => (
                <SwiperSlide style={{width: 'auto'}} key={idx}>
                  <div className={styles.slide}>
                    <span className={styles.date}>
                      {idx === 0 ? 'Сейчас' : convertTimestampToDate(el.dt, 'HH:mm')}
                    </span>
                    <span className={styles.temp}>{Math.round(el.temp)} <sup>°</sup></span>
                    {generateIcon(el.weather[0].icon)}
                    <span className={styles.windSpeed}>
                      <TiLocationArrowOutline />
                      {el.wind_speed} км/ч</span>
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
            {daily?.map((el, idx) => (
              <SwiperSlide style={{width: 'auto'}} key={idx}>
                <div className={styles.slide}>
                <span className={styles.day}>{convertTimestampToDate(el.dt, 'dd')}</span>
                  <span className={styles.date}>{convertTimestampToDate(el.dt, 'DD.MM')}</span>
                  {generateIcon(el.weather[0].icon)}
                  <span className={styles.temp}>{Math.round(el.temp.day)} <sup>°</sup></span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Tabs.TabPane>
      </Tabs>
    </>
  )

  return (
    <Layout.Content className={styles.container}>
      <div className={styles.card}>
        {isLoading ? <CardLoader /> : <CardContent />}
      </div>
    </Layout.Content>
  )
}