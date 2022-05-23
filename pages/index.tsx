import { NextPage } from 'next';
import { Weather } from '../components/Weather/Weather';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';

const Index: NextPage = () => {

  return (
    <>
      <Header />
      <Weather />
      <Menu />
    </>
  );
};

export default Index;