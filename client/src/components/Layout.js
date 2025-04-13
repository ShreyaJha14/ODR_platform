import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;