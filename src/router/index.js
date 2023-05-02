import { MantineProvider } from '@mantine/core';
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
      <MantineProvider>
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
