import { QueryClient } from 'react-query';
import { createStandaloneToast } from '@chakra-ui/react';
import { theme } from '../theme/theme';


const toast = createStandaloneToast({ theme });

export const queryClient = new QueryClient()