import { NextPage } from 'next';
import { Card } from '../components/Card/Card';
import { usePosition } from 'use-position';
import { useGetWeatherByLocationQuery } from '../services/WeatherService'

const Index: NextPage = () => {

  const { latitude, longitude } = usePosition(false);
  const { data, isLoading } = useGetWeatherByLocationQuery({lat: latitude, lon: longitude})

  return (
    <Card item={data} isLoading={isLoading} />
  );
};

export default Index;