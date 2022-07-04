import {useEffect} from 'react';
import {NextPage} from 'next';
import {Weather} from '@/components/Weather/Weather';
import {Menu} from '@/components/Menu/Menu';
import {Header} from '@/components/Header/Header';
import {Modal} from '@/components/Modal/Modal';
import {fetchWeather} from '@/api/fetchWeather';
import {useDispatch} from 'react-redux';
import {usePosition} from 'use-position';

const Index: NextPage = () => {

  const {latitude, longitude} = usePosition(false);
  const dispatch = useDispatch()

  useEffect(() => {
      if(latitude && longitude) dispatch(fetchWeather({lat: latitude, lon: longitude}))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude])

  return (
    <>
      <Header />
      <Weather />
      <Menu />
      <Modal />
    </>
  );
};

export default Index;