import { convertTimestampToDate } from '../../helpers/convertTimestampToDate'
import { useTypedSelector } from '../../hooks/redux'
import styles from './WeatherInfo.module.scss'


export const WeatherInfo = () => {

  const {data} = useTypedSelector(state => state.weatherReducer)

  const {
    sunrise,
    sunset,
    wind_speed,
    pressure,
    humidity,
    feels_like,
  } = {...data?.current};

  const items = [
    {title: 'Восход', value: convertTimestampToDate(sunrise)},
    {title: 'Закат', value: convertTimestampToDate(sunset)},
    {title: 'Ощущается', value: Math.round(Number(feels_like)), unit: '°C'},
    {title: 'Влажность', value: humidity, unit: '%'},
    {title: 'Давление', value: pressure, unit: 'mbar'},
    {title: 'Скорость ветра', value: wind_speed, unit: ' км/ч'},
  ]

  return (
    <ul className={styles.info}>
      {items.map((el, idx) => (
        <li className={styles.item} key={idx}>
          <span className={styles.title}>{el.title}</span>
          <span className={styles.value}>{el.value}{el.unit}</span>
        </li>
      ))}
    </ul>
  )
}
