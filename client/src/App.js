import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import CaseForm from './components/CaseForm';
import Mediation from './components/Mediation';
import About from './components/About';
import Contact from './components/Contact'
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/LoginForm/Register';
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
            <Route path="/LoginForm/LoginForm" component={LoginForm} />
            <Route path="/LoginForm/Register" component={Register} />
            <Route path="/About" component={About} />
            <Route exact path="/" component={Dashboard} />
            <Route path="/submit-case" component={CaseForm} />
            <Route path="/mediation/:caseId" component={Mediation} />
            <Route path="/Contact" component={Contact} />

            
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
