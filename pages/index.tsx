import { NextPage } from 'next';
import { Weather } from '../components/Weather/Weather';
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';
import { Modal } from '../components/Modal/Modal';

const Index: NextPage = () => {

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