import { MantineProvider } from '@mantine/core';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Gallery from '../Pages/Gallery';
import Gift from '../Pages/Gift';
import Main from '../Pages/Main';
import Reservation from '../Pages/Reservation';
import Service from '../Pages/Service';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MantineProvider
        theme={{
          fontFamily: 'Teko',
          headings: {
            fontFamily: 'Teko',
          },
          colors: {
            primary: ['#084453', '#383B69', '383B69'],
            secondary: ['#FFFBF5', '#EFEFEF'],
            warning: ['#D12E2E'],
          },
          breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
          },
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 768,
                  md: 960,
                  lg: 1420,
                  xl: 1920,
                },
              },
            },
          },
        }}
      >
        <Layout />
      </MantineProvider>
    ),

    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'gift',
        element: <Gift />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
      {
        path: 'service',
        element: <Service />,
      },
    ],
  },
]);
