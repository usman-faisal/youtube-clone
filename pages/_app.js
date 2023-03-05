import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,*::after,*::before{
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorText};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
const theme = {
  colorBg: "#0f0f0f",
  colorText: "#FFFFFF",
  colorPrimary: "#FF0000",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
