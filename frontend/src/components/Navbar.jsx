import React from 'react';
import { Grid, Typography} from '@mui/material';
import { Link as Lk } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Navbar = () => {
  return (
    <Grid container alignItems="center" marginTop={1.5}>
      <Grid item xs={6}>
        <Typography variant="h3" component="h5" align="left" marginLeft="2rem">
          ShopSmart
        </Typography>
      </Grid>
      <Grid item xs={6} container justifyContent="flex-end" paddingRight="2rem">
      <Lk style={{color:'black',textDecoration:'none',fontSize:'large'}}><LocationOnIcon /></Lk>
        <Lk style={{color:'black',textDecoration:'none',fontSize:'large'}}><ShoppingCartIcon /></Lk>
      </Grid>
    </Grid>
  );
};

export default Navbar;
