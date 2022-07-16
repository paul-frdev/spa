import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../../reactQuery/queryClient';
import { theme } from '../../theme/theme';
import { Header } from './Header';
import { Routers } from './Routers';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routers />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
