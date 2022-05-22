import { FC } from 'react'
import { IWeather } from '../../types/IWeather'
import { Cloud } from '@mui/icons-material'
import { Button, Skeleton, Stack } from '@mui/material'
import { WeatherDays } from '../WeatherDays/WeatherDays';
import { WeatherHours } from '../WeatherHours/WeatherHours'
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';
import { useActions } from '../../hooks/useActions';
import styles from './Weather.module.scss'

interface WeatherProps {
    data: IWeather | undefined
    isLoading: boolean
    isError: boolean
  }

export const Weather: FC<WeatherProps> = ({data, isLoading, isError}) => {

  const {toggleMenu} = useActions()

  const {
    temp,
    clouds,
    hourly,
    daily
  } = {...data, ...data?.current};

  const Loader = () => (
    <Stack spacing={2}>
      <Skeleton height={550} />
    </Stack>
  )

  const handleOpenMenu = () => toggleMenu()

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
      <WeatherInfo data={data} />
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
