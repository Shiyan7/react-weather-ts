import React, { FC } from 'react'
import { IWeather } from '../../../../../types/IWeather'
import styles from './Card.module.scss'

interface IWeatherProps {
  item: IWeather
}

export const Card: FC<IWeatherProps> = ({ item }) => {
  /* Все перечисленное ниже, это как пример что можно вытащить с апи (потом всё удалю) */
  return (
    <div className={styles.card}>
      <div>{item.location.country}</div>
      <div>{item.location.localtime}</div>
      <div>{item.location.region}</div>
      <div>{item.current.feelslike_c} °C</div>

      <div>{Math.floor(item?.current.wind_kph)} kp/h</div>
      <div>Humidity: {item.current.humidity}%</div>
      <img src={item.current.condition.icon} />
      {item.current.condition.text}
      <ul style={{display: 'flex', listStyle: 'none'}}>
        {item.forecast.forecastday.map(el => el.hour.map((el, idx) => {
          return (
            <li key={idx} style={{marginRight: '5px'}}>
              <img width={50} height={50} src={el.condition.icon} alt="" />
              <span>{el.time.replace  ('2022-04-21', '')}</span>
              <span>{Math.floor(el.temp_c)}</span>
            </li>
          )
        }))}
      </ul>
    </div>
  )
}