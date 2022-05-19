import { NextPage } from 'next';
import { usePosition } from 'use-position';
import { useGetWeatherByLocationQuery } from '../services/WeatherService'
import { Header } from '../components/Header/Header';
import { Weather } from '../components/Weather/Weather';
import { Menu } from '../components/Menu/Menu';
import Head from 'next/head';

const Index: NextPage = () => {

  const { latitude, longitude } = usePosition(true);
  const { data, isLoading } = useGetWeatherByLocationQuery({lat: latitude, lon: longitude})

  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <Header title={data?.timezone} isLoading={isLoading} />
      <Weather data={data} isLoading={isLoading} />
      <Menu content={data?.daily} />
    </>
  );
};

export default Index;