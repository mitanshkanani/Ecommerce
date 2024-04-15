import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Link as Lk } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <Grid item xs={12} container justifyContent="center" marginTop="2rem">
        <Box>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
          </Typography>
          <Box marginTop="0.5rem">
            <Lk to='/about' style={{textDecoration:'none',color:'black', marginRight: '1rem'}}>About Us</Lk>
            <Lk to='/privacy-policy' style={{textDecoration:'none',color:'black', marginRight: '1rem'}}>Privacy Policy</Lk>
            <Lk to='/terms-of-service' style={{textDecoration:'none',color:'black',marginRight:'1rem'}}>Terms of Service</Lk>
            <Lk to='/contact-us' style={{textDecoration:'none',color:'black'}}>Contact Us</Lk>
          </Box>
        </Box>
      </Grid>
    </footer>
  );
};

export default Footer;
