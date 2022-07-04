import {convertTemp} from '@/helpers/convertTemp'
import {convertTimestampToDate} from '@/helpers/convertTimestampToDate'
import {generateIcon} from '@/helpers/generateIcon'
import {useTypedSelector} from '@/hooks/useTypedSelector'
import styles from './WeatherDays.module.scss'

export const WeatherDays = () => {

    const {data} = useTypedSelector(state => state.weatherReducer)
    const {unitTemp} = useTypedSelector(state => state.unitReducer)

    return (
        <div className={styles.container}>
            {data?.daily?.slice(0, 3).map((el, idx) => {

                const {dt, temp: {min, max}, weather} = el;

                return (
                    <div className={styles.item} key={idx}>
                        <div className={styles.left}>
                            {generateIcon(weather[0].icon)}
                            <span className={styles.day}>{convertTimestampToDate(dt, 'dd')}</span>
                            <span className={styles.desc}>{weather[0].description}</span>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.temp}>
                                <span className={styles.tempValue}>{convertTemp(max, unitTemp)}<sup>°</sup></span>
                                <span className={styles.tempDivider}>/</span>
                                <span className={styles.tempValue}>{convertTemp(min, unitTemp)}<sup>°</sup></span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
