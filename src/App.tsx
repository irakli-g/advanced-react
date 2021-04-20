import React from "react";
import { Form, List } from "./pages";
import { Header } from "./components";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <List />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default App;
