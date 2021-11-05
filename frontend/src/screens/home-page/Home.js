import React, { useState, useEffect } from 'react';
import Featured from '../../components/featured/Featured';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import List from './../../components/list/List';
import './Home.scss';
import axios from 'axios';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `list${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
          {
            headers: {
              token:
              "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
       setLists(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [genre, type]);

  console.log(lists)

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} setGenre={setGenre}/> 
      {lists.map((list, index) => (
        <List ker={index} list={list} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
