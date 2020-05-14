import React from 'react';
import { Provider } from "mobx-react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// local files
import store from "../store";
import { HomePage } from "./home/HomePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
