import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: ${roboto.style.fontFamily};
  }

  *, *::after, *::before {
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
    //font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a:link, a:visited {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export const theme = {
  colorBg: "#0f0f0f",
  colorText: "#FFFFFF",
  colorPrimary: "#FF0000",
  colorAccent: "rgba(255, 255, 255, 0.1)",
};
