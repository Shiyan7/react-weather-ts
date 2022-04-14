import React, { FC } from 'react'
import { IWeather } from '../../../../../types/IWeather'
import styles from './Card.module.scss'

type IWeatherType = {
  item: IWeather
}

export const Card: FC<IWeatherType> = ({ item }) => {
  return (
    <div className={styles.card}>
      {item.location.tz_id}
    </div>
  )
}
