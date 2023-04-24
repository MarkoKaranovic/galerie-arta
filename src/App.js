import { MantineProvider } from '@mantine/core';
import Main from './Pages/Main';

function App() {
  return (
    <MantineProvider>
      <Main />
    </MantineProvider>
  );
}

export default App;
