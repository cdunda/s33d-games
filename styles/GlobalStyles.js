import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #121212;
    --color-text: #ffffff;
    --color-primary: #32CD32;
    --color-secondary: #00FF7F;
    --color-accent-1: #FFA500;
    --color-accent-2: #FFFF00;
    --color-accent-3: #FF1493;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-secondary);
    }
  }
`;

export default GlobalStyles;
