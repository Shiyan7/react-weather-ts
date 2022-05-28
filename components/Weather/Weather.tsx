import { Cloud } from '@mui/icons-material'
import { Button, Skeleton } from '@mui/material'
import { WeatherDays } from '../WeatherDays/WeatherDays';
import { WeatherHours } from '../WeatherHours/WeatherHours'
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';
import { useTypedSelector } from '../../hooks/redux';
import { toggleMenu } from '../../store/reducers/menuSlice';
import { useDispatch } from 'react-redux';
import styles from './Weather.module.scss'
import { convertTemp } from '../../helpers/convertTemp';

export const Weather = () => {

  const {data, isLoading, error} = useTypedSelector(state => state.weatherReducer)
  const {unitTemp} = useTypedSelector(state => state.unitReducer)
  const { temp, clouds } = {...data?.current};
  const dispatch = useDispatch()
  const handleOpenMenu = () => dispatch(toggleMenu())

  const WeatherContent = () => (
    <div className={styles.content}>
      <h2 className={styles.temp}>
        {convertTemp(temp, unitTemp)}
        <sup>{unitTemp}</sup>
      </h2>
      <h3 className={styles.desc}>{data?.current.weather[0].description}</h3>
      <span className={styles.clouds}>
        <Cloud />
        {clouds}%
      </span>
      <WeatherDays />
      <Button
        className={styles.btn}
        variant='contained'
        onClick={handleOpenMenu}
      >
        Прогноз на неделю
      </Button>
      <WeatherHours />
      <WeatherInfo />
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        {isLoading || error ? <Skeleton height={700} /> : <WeatherContent />}
      </div>
    </div>
  )
}
