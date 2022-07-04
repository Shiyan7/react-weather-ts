import {convertPressure} from '@/helpers/convertPressure'
import {convertSpeed} from '@/helpers/convertSpeed'
import {convertTemp} from '@/helpers/convertTemp'
import {convertTimestampToDate} from '@/helpers/convertTimestampToDate'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import styles from './WeatherInfo.module.scss'

export const WeatherInfo = () => {

	const {data} = useTypedSelector(state => state.weatherReducer)
	const {unitTemp, unitSpeed, unitPressure} = useTypedSelector(state => state.unitReducer)

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
		{title: 'Ощущается', value: convertTemp(feels_like, unitTemp), unit: unitTemp},
		{title: 'Влажность', value: humidity, unit: '%'},
		{title: 'Давление', value: convertPressure(pressure, unitPressure), unit: unitPressure},
		{title: 'Скорость ветра', value: convertSpeed(wind_speed, unitSpeed), unit: ` ${unitSpeed}`},
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
