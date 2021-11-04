import React, { useState, useEffect, useMemo } from 'react';
import FeaturedInfo from '../components/FeaturedInfo/FeaturedInfo';
import Charts from '../components/Charts/Charts';
import { Grid } from '@mui/material';
import WidgetSmall from '../components/WidgetSmall/WidgetSmall';
import WidgetLarge from '../components/WidgetLarge/WidgetLarge';
import axios from 'axios';

const Home = () => {
  const months = useMemo( () =>[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],[]);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get('/users/stats', {
          headers: {
            token:
              process.env.TOKEN,
          },
        });
        const statsList = res.data.sort(function (a,b) {
          return a._id - b._id;
        }); 
        // setUserStats(res.data)
        statsList.map(item => setUserStats(prev =>[...prev,{name:months[item._id-1], "New User": item.total}]))
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [months]);

  console.log(userStats)
  return (
    <div>
      <FeaturedInfo />
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12}>
          <Charts data={userStats} title='User Analytics' grid dataKey='New User' />
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <WidgetSmall />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <WidgetLarge />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
