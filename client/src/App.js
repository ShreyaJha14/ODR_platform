import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CaseForm from './components/CaseForm';
import Mediation from './components/Mediation';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/submit-case" component={CaseForm} />
            <Route path="/mediation/:caseId" component={Mediation} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
