import "../styles/globals.css";
// import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSilce } from "./features/todos/apiSlice";

function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider api={apiSilce}>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
