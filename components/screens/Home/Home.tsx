import {Col, Layout, Row} from 'antd'
import {useAppSelector} from '../../../hooks/redux'
import { useGetWeatherByCityQuery } from '../../../services/WeatherService'
import {Card} from './components/Card/Card'

export const Home = () => {

    const { city } = useAppSelector(state => state.searchRedcuer)
    const { data, error, isLoading } = useGetWeatherByCityQuery(city)

    return (
        <Layout.Content style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '64px 15px',
            width: '100%'
        }}>
            {data && <Card item={data} />}
        </Layout.Content>
    )
}
