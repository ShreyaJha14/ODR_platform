import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    height: '100%',
    overflow: 'auto'
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  caseItem: {
    marginBottom: theme.spacing(1),
    border: '1px solid #eee',
    borderRadius: '4px'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();
  const [activeCases, setActiveCases] = useState([]);
  const [pendingCases, setPendingCases] = useState([]);
  const [resolvedCases, setResolvedCases] = useState([]);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const [active, pending, resolved] = await Promise.all([
        axios.get(`${API_URL}/cases/status/in_mediation`),
        axios.get(`${API_URL}/cases/status/pending`),
        axios.get(`${API_URL}/cases/status/resolved`)
      ]);

      setActiveCases(active.data);
      setPendingCases(pending.data);
      setResolvedCases(resolved.data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  const handleCaseClick = (caseId) => {
    history.push(`/mediation/${caseId}`);
  };

  const CaseList = ({ cases, status }) => (
    <List>
      {cases.map((case_) => (
        <ListItem 
          key={case_._id} 
          className={classes.caseItem}
          button 
          onClick={() => handleCaseClick(case_._id)}
        >
          <ListItemText
            primary={case_.title}
            secondary={
              <>
                <Typography component="span" variant="body2">
                  {case_.description}
                </Typography>
              </>
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>Active Cases</Typography>
            <CaseList cases={activeCases} status="in_mediation" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>Pending Mediations</Typography>
            <CaseList cases={pendingCases} status="pending" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>Resolved Cases</Typography>
            <CaseList cases={resolvedCases} status="resolved" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;