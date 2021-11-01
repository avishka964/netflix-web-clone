import React from 'react';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import List from './../../components/list/List';
import './Home.scss';


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='movie' />
      <List />
      <List />
      <List />
      <List />
      <Footer />
    </div>
  );
};

export default Home;
