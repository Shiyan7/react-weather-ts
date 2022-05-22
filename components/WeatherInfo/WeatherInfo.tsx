import { FC } from 'react'
import { convertTimestampToDate } from '../../helpers/convertTimestampToDate'
import { IWeather } from '../../types/IWeather'
import styles from './WeatherInfo.module.scss'

interface WeatherInfoProps {
  data: IWeather | undefined
}

export const WeatherInfo: FC<WeatherInfoProps> = ({data}) => {

  const {
    sunrise,
    sunset,
    wind_speed,
    pressure,
    humidity,
    feels_like,
  } = {...data?.current};

  return (
    <ul className={styles.info}>
      <li className={styles.item}>
        <span className={styles.caption}>Восход</span>
        <span className={styles.value}>{convertTimestampToDate(sunrise, 'HH:mm')}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.caption}>Закат</span>
        <span className={styles.value}>{convertTimestampToDate(sunset, 'HH:mm')}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.caption}>Ощущается</span>
        <span className={styles.value}>{Math.round(Number(feels_like))}°C</span>
      </li>
      <li className={styles.item}>
        <span className={styles.caption}>Влажность</span>
        <span className={styles.value}>{humidity}%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.caption}>Давление</span>
        <span className={styles.value}>{pressure}mbar</span>
      </li>
      <li className={styles.item}>
        <span className={styles.caption}>Скорость ветра</span>
        <span className={styles.value}>{wind_speed} км/ч</span>
      </li>
    </ul>
  )
}
