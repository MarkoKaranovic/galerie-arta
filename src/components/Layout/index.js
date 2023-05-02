import { Box, Container } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navigation from '../Navigation';

export default function Layout() {
  return (
    <Container
      // style={{ border: '1px solid red' }}
      maw={1440}
      p={0}
    >
      <Navigation />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
