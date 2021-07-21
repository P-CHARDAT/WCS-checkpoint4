import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Accueil/About";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <RoleContext.Provider value={role}>
          <NavBar roleContext={RoleContext} /> */}
        <Switch>
          <Route path="/">
            <About />
          </Route>
        </Switch>
        {/* </RoleContext.Provider> */}
      </Router>
    </>
  );
}

export default App;
