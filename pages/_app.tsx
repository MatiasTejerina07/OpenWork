import { AppProps } from "next/app";
import { UIProovider } from "@/context/ui";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import "@/styles/globals.css";
import { lightTheme, darkTheme } from "@/themes";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProovider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProovider>
  );
}
