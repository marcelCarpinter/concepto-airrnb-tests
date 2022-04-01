import React from "react";
import { ThemeProvider } from "styled-components";
import DefaultBackground from "assets/image/informacion.webp";

export const myTheme = {
  fonts: {
    title: {
      size: "17px",
      family: "Helvetica",
      weight: "normal",
    },
    subtitle: {
      family: "Roboto",
      style: "normal",
      weight: "400",
      size: "1rem",
    },
    text: {
      size: "1rem",
      family: "Helvetica",
      weight: "normal",
    },
  },
  color: {
    default: "black",
    button: "red",
  },
  button: {
    background: "#C62626",
    secundary: "#d8d8d8",
    secundaryfontcolor: "rgba(0, 0, 0, 7);",
    border: {
      radius: "16px",
    },
  },
  size: {
    logo: "100px",
  },
  defaultText: {
    text: "TextoDefault",
    listText: ["texto1", "texto2", "texto3"],
  },
  pageSections: {
    margins: "1em 5em 1em 5em",
    width: "auto",
    height: "400px",
  },
  Image: {
    background: DefaultBackground,
  },
};

const MyThemeComponent = ({ children, theme }) => (
  <ThemeProvider theme={{ ...myTheme, ...theme }}>
    <div>{children}</div>
  </ThemeProvider>
);

export default MyThemeComponent;
