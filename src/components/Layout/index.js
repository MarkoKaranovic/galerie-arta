import { Box, Container } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as sdp from 'sdpoker';
import Footer from '../Footer';
import Navigation from '../Navigation';

export default function Layout() {
  console.log(sdp);
  return (
    <Container
      style={{ border: '1px solid red', overflow: 'hidden' }}
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
