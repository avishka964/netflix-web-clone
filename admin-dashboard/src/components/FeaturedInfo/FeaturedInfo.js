import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Revenue
            </Typography>
            <Typography
              sx={{
                color: '#14279B',
                fontSize: 34,
                fontWeight: 'medium',
              }}
            >
              98.3 K
              <ArrowDownward />
            </Typography>
            <Typography
              sx={{
                color: '#6ECB63',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
            >
              +18.77%
            </Typography>
            <Box
              sx={{
                color: 'text.secondary',
                display: 'inline',
                fontSize: 12,
              }}
            >
              compared to the last month
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Sales
            </Typography>
            <Typography
              sx={{
                color: '#FF5C58',
                fontSize: 34,
                fontWeight: 'medium',
              }}
            >
              25.0 K
              <ArrowDownward />
            </Typography>
            <Typography
              sx={{
                color: '#6ECB63',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
            >
              +9.77%
            </Typography>
            <Box
              sx={{
                color: 'text.secondary',
                display: 'inline',
                fontSize: 12,
              }}
            >
              compared to the last month
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={{ minWidth: 200 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Cost
            </Typography>
            <Typography
              sx={{
                color: '#FFB344',
                fontSize: 34,
                fontWeight: 'medium',
              }}
            >
              10.0 K
              <ArrowUpward />
            </Typography>
            <Typography
              sx={{
                color: '#6ECB63',
                display: 'inline',
                fontWeight: 'medium',
                mx: 0.5,
              }}
            >
              +20.77%
            </Typography>
            <Box
              sx={{
                color: 'text.secondary',
                display: 'inline',
                fontSize: 12,
              }}
            >
              compared to the last month
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FeaturedInfo;
