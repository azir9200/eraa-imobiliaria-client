import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProviders>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={router} />
            </QueryClientProvider>
          </AuthProviders>
        </PersistGate>
      </Provider>
    </React.StrictMode>
    ,
  </div>
);
