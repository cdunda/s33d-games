import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  colors: {
    background: '#121212',
    text: '#ffffff',
    primary: '#32CD32',
    secondary: '#00FF7F',
    accent1: '#FFA500',
    accent2: '#FFFF00',
    accent3: '#FF1493',
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
