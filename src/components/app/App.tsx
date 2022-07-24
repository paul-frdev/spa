import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../../reactQuery/queryClient';
import { theme } from '../../theme/theme';
import { Header } from './Header';
import { Routers } from './Routers';
import { useNavigate } from 'react-router-dom';


function App() {
  const history = useNavigate();
  const hotKeys = (event: any) => {
    console.log(event.code);
    if (event.ctrlKey) {
      return history('/treatments')
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', hotKeys);

    return () => window.removeEventListener('keydown', hotKeys)
  }, [])
  
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
