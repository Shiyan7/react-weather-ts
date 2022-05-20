import { NextPage } from 'next';
import { usePosition } from 'use-position';
import { useGetWeatherByLocationQuery } from '../services/WeatherService'
import { Header } from '../components/Header/Header';
import { Weather } from '../components/Weather/Weather';
import { Menu } from '../components/Menu/Menu';
import Head from 'next/head';
import { useEffect } from 'react';

const Index: NextPage = () => {

  const { latitude, longitude } = usePosition(false);
  const { data, isLoading, isError } = useGetWeatherByLocationQuery({lat: latitude, lon: longitude})

  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <Header title={data?.timezone} isLoading={isLoading} isError={isError} />
      <Weather data={data} isLoading={isLoading} isError={isError} />
      <Menu content={data?.daily} />
    </>
  );
};

export default Index;