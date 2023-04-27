import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Pages/Main';
import Completion from './components/Completion';
import Payment from './components/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MantineProvider>
              <Main />
            </MantineProvider>
          }
        />
        <Route
          path="/payment"
          element={<Payment />}
        />
        <Route
          path="/completion"
          element={<Completion />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
