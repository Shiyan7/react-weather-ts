import { Layout, Spin } from 'antd'
import { useAppSelector } from '../../../hooks/redux'
import { IWeather } from '../../../models/IWeather'
import { Card } from './components/Card/Card'
import styles from './Home.module.scss'
import { usePosition } from 'use-position';
import { useGetWeatherByLocationQuery } from '../../../services/WeatherService'

export const Home = () => {

    const { latitude, longitude } = usePosition(false);
    const { data, isLoading } = useGetWeatherByLocationQuery({lat: latitude, lon: longitude})

    if(isLoading) {
        return <Spin size='large' />
    }

    return (
        <Layout.Content className={styles.container}>
            {data && <Card item={data} />}
        </Layout.Content>
    )
}