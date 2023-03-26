import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { GlobalStyle, theme } from "@/styles/global";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://www.youtube.com/s/desktop/00d32223/img/favicon_144x144.png"
        />
        <title>Youtube</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
