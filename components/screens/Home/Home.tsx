import { Layout } from 'antd'
import { useAppSelector } from '../../../hooks/redux'
import { useGetWeatherByCityQuery } from '../../../services/WeatherService'
import { Card } from './components/Card/Card'
import styles from './Home.module.scss'

export const Home = () => {

    const { city } = useAppSelector(state => state.searchRedcuer)
    const { data, error, isLoading } = useGetWeatherByCityQuery(city)

    return (
        <Layout.Content className={styles.container}>
            {data && <Card item={data} />}
        </Layout.Content>
    )
}
