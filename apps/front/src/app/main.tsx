import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./index.css";
import { CreateConfiguration } from "./pages/CreateConfiguration";
import { ListConfigurations } from "./pages/ListConfigurations";
import { Provider } from "react-redux";
import { store } from "../core/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="ajouter" element={<CreateConfiguration />} />
            <Route path="/" element={<ListConfigurations />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
