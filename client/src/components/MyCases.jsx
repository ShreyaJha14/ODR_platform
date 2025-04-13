import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(3),
    color: '#1976d2',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  status: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#e3f2fd',
  }
}));

const MyCases = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        My Cases
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                Case #001
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Filed on: 2024-02-15
              </Typography>
              <Typography variant="body1" paragraph>
                Property Dispute Resolution
              </Typography>
              <div className={classes.status}>
                <Typography variant="body2">Status: Pending</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                Case #002
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Filed on: 2024-02-10
              </Typography>
              <Typography variant="body1" paragraph>
                Contract Dispute
              </Typography>
              <div className={classes.status}>
                <Typography variant="body2">Status: In Mediation</Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyCases;