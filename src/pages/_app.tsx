import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "../styles/globals.css";
import dynamic from "next/dynamic";
import { GlobalContextProvider } from "@/lib/global";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

const Fingerprint = dynamic(() => import("@/components/Fingerprint"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  ConfigProvider.config({
  });
  return (
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <GlobalContextProvider>
          <Component {...pageProps} />
          <Fingerprint />
        </GlobalContextProvider>
      </StyleProvider>
    </ConfigProvider>
  );
}

export default MyApp;
