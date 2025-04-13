import React, { useState } from 'react';
import { Grid, Paper, Typography, makeStyles, List, ListItem, ListItemText, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#f8f9fa',
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    height: '100%',
    overflow: 'auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  title: {
    marginBottom: theme.spacing(4),
    color: '#1976d2',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  categoryTitle: {
    color: '#1976d2',
    textAlign: 'center',
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  caseItem: {
    marginBottom: theme.spacing(1),
    border: '1px solidrgb(11, 11, 11)',
    borderRadius: '8px',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-2px)',
      transition: 'all 0.3s ease',
    },
  },
  caseCount: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#1976d2',
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3),
    padding: theme.spacing(2),
    backgroundColor: '#e3f2fd',
    borderRadius: '12px',
    border: '2px solidrgb(8, 8, 8)',
  },
  listContainer: {
    marginTop: theme.spacing(2),
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const [activeCases] = useState([
    {
      _id: '1',
      title: 'Property Boundary Dispute',
      description: 'Dispute regarding property boundaries between neighboring plots'
    },
    {
      _id: '2',
      title: 'Contract Breach Case',
      description: 'Business contract violation between two parties'
    }
  ]);

  const [pendingCases] = useState([
    {
      _id: '3',
      title: 'Rental Agreement Dispute',
      description: 'Conflict regarding rental terms and conditions'
    }
  ]);

  const [resolvedCases] = useState([
    {
      _id: '4',
      title: 'Employment Settlement',
      description: 'Successfully resolved workplace compensation dispute'
    }
  ]);

  const handleCaseClick = (caseId) => {
    history.push(`/mediation/${caseId}`);
  };

  const CaseList = ({ cases, status }) => (
    <List className={classes.listContainer}>
      {cases.map((case_) => (
        <ListItem 
          key={case_._id} 
          className={classes.caseItem}
          button 
          onClick={() => handleCaseClick(case_._id)}
        >
          <ListItemText
            primary={
              <Typography variant="subtitle1" style={{ fontWeight: 500 }}>
                {case_.title}
              </Typography>
            }
            secondary={
              <Typography component="span" variant="body2" color="textSecondary">
                {case_.description}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Welcome to ODR Platform
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.categoryTitle}>
              Active Cases
            </Typography>
            <Box className={classes.caseCount}>2</Box>
            <CaseList cases={activeCases} status="in_mediation" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.categoryTitle}>
              Pending Mediations
            </Typography>
            <Box className={classes.caseCount}>1</Box>
            <CaseList cases={pendingCases} status="pending" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.categoryTitle}>
              Resolved Cases
            </Typography>
            <Box className={classes.caseCount}>1</Box>
            <CaseList cases={resolvedCases} status="resolved" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;