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

  const items = [
    {title: 'Восход', value: convertTimestampToDate(sunrise, 'HH:mm')},
    {title: 'Закат', value: convertTimestampToDate(sunset, 'HH:mm')},
    {title: 'Ощущается', value: Math.round(Number(feels_like)), caption: '°C'},
    {title: 'Влажность', value: humidity, caption: '%'},
    {title: 'Давление', value: pressure, caption: 'mbar'},
    {title: 'Скорость ветра', value: wind_speed, caption: ' км/ч'},
  ]

  return (
    <ul className={styles.info}>
      {items.map((el, idx) => (
        <li className={styles.item} key={idx}>
          <span className={styles.title}>{el.title}</span>
          <span className={styles.value}>{el.value}{el.caption}</span>
        </li>
      ))}
    </ul>
  )
}
