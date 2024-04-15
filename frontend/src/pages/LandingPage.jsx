import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Link as Lk } from 'react-router-dom';
import TestimonialSection from '../landing/TestimonialSection';
import Footer from '../components/Footer';
import GettingStarted from '../landing/GettingStarted';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <Grid>
      <Grid container alignItems="center" marginTop={1.5}>
        <Grid item xs={6}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h3" component="h1" align="left" marginLeft="2rem">
              ShopSmart
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end" paddingRight="2rem">
          <Button variant="outlined" style={{ marginRight: '1rem' }}>
            <Lk to='/sign-up' style={{textDecoration:'none',color:'#663f00'}}>Sign Up</Lk>
          </Button>
          <Button variant="outlined">
            <Lk to='/sign-in' style={{textDecoration:'none',color:'#663f00'}}>Log In</Lk>
          </Button>
        </Grid>
      </Grid>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <GettingStarted />
      </motion.div>
      <TestimonialSection />
      <Footer />
    </Grid>
  );
};

export default LandingPage;
