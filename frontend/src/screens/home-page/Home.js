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
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2ZjZGQwNzEzZjQ3MDQzMmIwMTY4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTgzMzI3NCwiZXhwIjoxNjM2MjY1Mjc0fQ.Ilu6bO4_7cm4IlHUFq-N_Y5yU37g-Clxi3Ptp5B-UYA',
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

  return (
    <div className='home'>
      <Navbar />
      <Featured type={type} /> 
      {lists.map(list => (
        <List list={list} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
