import App from "./App";
import ReactDOM from "react-dom";
import { Root } from "./redux/Root";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
