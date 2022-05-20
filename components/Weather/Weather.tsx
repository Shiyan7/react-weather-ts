import React from 'react'
import { IWeather } from '../../types/IWeather'
import { Cloud } from '@mui/icons-material'
import { Button, Skeleton, Stack } from '@mui/material'
import { WeatherDays } from '../WeatherDays/WeatherDays';
import { WeatherHours } from '../WeatherHours/WeatherHours'
import { convertTimestampToDate } from '../../utils/convertTimestampToDate'
import { useAppDispatch } from '../../hooks/redux'
import { toggleMenu } from '../../store/reducers/menuSlice'
import styles from './Weather.module.scss'

interface IWeatherProps {
    data: IWeather | undefined
    isLoading: boolean
    isError: boolean
  }

export const Weather: React.FC<IWeatherProps> = ({data, isLoading, isError}) => {

  const dispatch = useAppDispatch()

  const {
    temp,
    clouds,
    sunrise,
    sunset,
    wind_speed,
    pressure,
    humidity,
    feels_like,
    hourly,
    daily
  } = {...data, ...data?.current};

  const Loader = () => (
    <Stack spacing={2}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Stack>
  )

  const handleOpenMenu = () => dispatch(toggleMenu())

  const WeatherContent = () => (
    <div className={styles.content}>
      <h2 className={styles.temp}>
        {Math.round(Number(temp))}
        <sup>°C</sup>
      </h2>
      <h3 className={styles.desc}>{data?.current.weather[0].description}</h3>
      <span className={styles.clouds}>
        <Cloud />
        {clouds}%
      </span>
      <WeatherDays days={daily} />
      <Button variant='contained' className={styles.btn} onClick={handleOpenMenu}>Прогноз на неделю</Button>
      <WeatherHours hours={hourly} />
      <ul className={styles.info}>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Восход</span>
          <span className={styles.infoItemValue}>{convertTimestampToDate(sunrise, 'HH:mm')}</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Закат</span>
          <span className={styles.infoItemValue}>{convertTimestampToDate(sunset, 'HH:mm')}</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Ощущается</span>
          <span className={styles.infoItemValue}>{Math.round(Number(feels_like))}°C</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Влажность</span>
          <span className={styles.infoItemValue}>{humidity}%</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Давление</span>
          <span className={styles.infoItemValue}>{pressure}mbar</span>
        </li>
        <li className={styles.infoItem}>
          <span className={styles.infoItemCaption}>Скорость ветра</span>
          <span className={styles.infoItemValue}>{wind_speed} км/ч</span>
        </li>
      </ul>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        {isLoading || isError ? <Loader /> : <WeatherContent />}
      </div>
    </div>
  )
}
