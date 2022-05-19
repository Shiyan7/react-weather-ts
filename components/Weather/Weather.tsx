import React from 'react'
import { IWeather } from '../../models/IWeather'
import styles from './Weather.module.scss'
import { Cloud } from '@mui/icons-material'
import { Button, LinearProgress, Skeleton, Stack } from '@mui/material'
import { WeatherDays } from '../WeatherDays/WeatherDays';
import { WeatherHours } from '../WeatherHours/WeatherHours'
import { convertTimestampToDate } from '../../utils/convertTimestampToDate'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleMenu } from '../../store/reducers/menuSlice'

interface IWeatherProps {
    data: IWeather | undefined
    isLoading: boolean
  }

export const Weather: React.FC<IWeatherProps> = ({data, isLoading}) => {

  const {isOpenMenu} = useAppSelector(state => state.menuReducer)
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
      <Skeleton className={styles.skeleton} sx={{ bgcolor: '#6C7590' }} />
      <Skeleton className={styles.skeleton} sx={{ bgcolor: '#6C7590' }} height={500} />
      <Skeleton className={styles.skeleton} sx={{ bgcolor: '#6C7590' }} />
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
          <span className={styles.infoItemValue}>{humidity}</span>
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
        {isLoading ? <Loader /> : <WeatherContent />}
      </div>
    </div>
  )
}
