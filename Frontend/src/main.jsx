import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import store from "./redux/store.js";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <div className="font-Roboto">
          <App />
        </div>
      </HelmetProvider>
    </Provider>
  </StrictMode>,
);
