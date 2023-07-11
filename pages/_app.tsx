import { AppProps } from "next/app";

import { ThemeProvider } from "@material-tailwind/react";

import "@/styles/globals.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
