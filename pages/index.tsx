import { NextPage } from 'next';
import { usePosition } from 'use-position';
import { useGetWeatherByLocationQuery } from '../services/WeatherService'
import { Header } from '../components/Header/Header';
import { Weather } from '../components/Weather/Weather';

const Index: NextPage = () => {

  const { latitude, longitude } = usePosition(true);
  const { data, isLoading } = useGetWeatherByLocationQuery({lat: latitude, lon: longitude}, {pollingInterval: 60000})

  return (
    <>
      <Header title={data?.timezone} isLoading={isLoading} />
      <Weather data={data} isLoading={isLoading} />
    </>
  );
};

export default Index;