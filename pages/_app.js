import "antd/dist/antd.css";
import "./_app.scss";

import { StoreProvider } from "../store/store";
import Header from "./global/Header";
import Style from "./global/Style";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Header />
      <Component {...pageProps} />
      <Style />
    </StoreProvider>
  );
}
