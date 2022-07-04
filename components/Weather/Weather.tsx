import {Button, Skeleton} from '@mui/material';
import {WeatherDays} from '@/components/WeatherDays/WeatherDays';
import {WeatherHours} from '@/components/WeatherHours/WeatherHours'
import {WeatherInfo} from '@/components/WeatherInfo/WeatherInfo';
import {useTypedSelector} from '@/hooks/useTypedSelector';
import {convertTemp} from '@/helpers/convertTemp';
import {useActions} from '@/hooks/useActions';
import {Cloud} from '@mui/icons-material';
import styles from './Weather.module.scss';

export const Weather = () => {

	const {data, isLoading, error} = useTypedSelector(state => state.weatherReducer)
	const {unitTemp} = useTypedSelector(state => state.unitReducer)
	const {toggleMenu} = useActions()
	const {temp, clouds} = {...data?.current};

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
				onClick={() => toggleMenu()}
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
				{isLoading || error ? <Skeleton height={630} /> : <WeatherContent />}
			</div>
		</div>
	)
}