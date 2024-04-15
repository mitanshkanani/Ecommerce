import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link as Lk } from 'react-router-dom';
import NewsLetterSection from '../landing/NewsLetterSection';
import TestimonialSection from '../landing/TestimonialSection';
import Footer from '../components/Footer';
const LandingPage = () => {
  return (
    <Grid>
      <Grid container alignItems="center" marginTop={1.5}>
        <Grid item xs={6}>
        <Typography variant="h3" component="h1" align="left" marginLeft="2rem">
          ShopSmart
        </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" paddingRight="2rem">
        <Button variant="outlined" style={{ marginRight: '1rem' }}>
          <Lk to='/sign-up' style={{textDecoration:'none',color:'black'}}>Sign Up</Lk>
        </Button>
        <Button variant="outlined">
           <Lk to='/sign-in' style={{textDecoration:'none',color:'black'}}>Log In</Lk>
        </Button>
      </Grid>
      </Grid>
      <TestimonialSection />
      <NewsLetterSection />
      
      <Footer />
    </Grid>
    
  );
};

export default LandingPage;
