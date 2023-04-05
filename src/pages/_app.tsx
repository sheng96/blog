import BLOG from "blog.config";
import type { AppProps } from "next/app";
// import 'antd/dist/antd.css'
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { createContext, useContext, useEffect, useState } from "react";
import { GlobalContextProvider } from "@/lib/global";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
