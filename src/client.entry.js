import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./index";

ReactDOM.hydrateRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.documentElement
);