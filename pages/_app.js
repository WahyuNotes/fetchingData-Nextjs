import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { usersApi } from "./services/users";

function MyApp({ Component, pageProps }) {
  return (
    <ApiProvider api={usersApi}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApiProvider>
  );
}

export default MyApp;
