import React from 'react';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(2, 0),
    backgroundColor: '#fff',
  },
  title: {
    color: '#1976d2',
    marginBottom: theme.spacing(4),
  },
  section: {
    marginBottom: theme.spacing(4),
  }
}));

const Mediation = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h3" className={classes.title} align="center">
        Online Mediation Center
      </Typography>

      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Current Mediation Status
        </Typography>
        <Typography variant="body1">
          Welcome to the ODR Platform's mediation center. Here you can view and manage your mediation sessions.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Active Mediations
            </Typography>
            <Typography>
              No active mediation sessions found.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Scheduled Sessions
            </Typography>
            <Typography>
              No upcoming mediation sessions scheduled.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          Mediation Process
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Step 1</Typography>
            <Typography>Submit your case details</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Step 2</Typography>
            <Typography>Choose a mediator</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Step 3</Typography>
            <Typography>Begin mediation session</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Mediation;