import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import {createBreakpoints} from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '770px',
  lg: '1040px',
  xl: '1260px',
  '2xl': '96em'
});

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'olive.800',
        backgroundColor: 'olive.100',
      },
    },
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Forum, sans-serif',
    mono: 'Menlo, monospace',
  },
  colors: {
    olive: {
      50: '#eff5e9',
      100: '#d5ddd3',
      200: '#bbc5b9',
      300: '#a1ad9e',
      400: '#879684',
      500: '#6e7c6a',
      600: '#556152',
      700: '#3c4539',
      800: '#222a21',
      900: '#051005',
    },
  },
  breakpoints,
  // withDefaultColorScheme({ colorScheme: "brand" }),
});
