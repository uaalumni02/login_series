import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login"

import GlobalStateProvider from "./store/GlobalStateProvider";

function App() {
  return (
    <GlobalStateProvider>
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
      </BrowserRouter>
    </div>
    </GlobalStateProvider>
  );
}

export default App;
