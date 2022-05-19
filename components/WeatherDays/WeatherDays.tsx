import React from 'react'
import styles from './WeatherDays.module.scss'
import { convertTimestampToDate } from '../../utils/convertTimestampToDate'
import { generateIcon } from '../../utils/generateIcon'
import { IDaily } from '../../models/IWeather'

interface IWeatherDaysProps {
    days: IDaily[] | undefined
}

export const WeatherDays: React.FC<IWeatherDaysProps> = ({days}) => {
  return (
    <div className={styles.container}>
        {days?.slice(0, 3).map((el, idx) => (
            <div className={styles.item} key={idx}>
                <div className={styles.left}>
                    {generateIcon(el.weather[0].icon)}
                    <span className={styles.day}>{convertTimestampToDate(el.dt, 'dd')}</span>
                    <span className={styles.desc}>{el.weather[0].description}</span>
                </div>
                <div className={styles.right}>
                    <div className={styles.temp}>
                        <span className={styles.tempValue}>{Math.round(el.temp.max)}<sup>°</sup></span>
                        <span className={styles.tempDivider}>/</span>
                        <span className={styles.tempValue}>{Math.round(el.temp.min)}<sup>°</sup></span>
                    </div>
                </div>
            </div>
        ))}
        </div>
  )
}
