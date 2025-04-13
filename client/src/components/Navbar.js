import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: 'white',
    textDecoration: 'none'
  },
  navButton: {
    color: 'white',
    marginLeft: theme.spacing(2)
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={Link} to="/">
            ODR Platform
          </Typography>
          <Button component={Link} to="../LoginForm/LoginForm" className={classes.navButton}>Login</Button>
          <Button component={Link} to="/About" className={classes.navButton}>About Us</Button>
          <Button component={Link} to="/submit-case" className={classes.navButton}>
            Submit Case
          </Button>
          <Button component={Link} to="/my-cases" className={classes.navButton}>
            My Cases
          </Button>
          <Button 
  component={Link} 
  to="/mediation" 
  className={classes.navButton}
>
  Mediation
</Button>
           
          <Button component = {Link} to="/Contact" className={classes.navButton}>Contact Us</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;