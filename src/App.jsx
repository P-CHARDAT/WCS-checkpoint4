import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks.js";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import About from "./components/Accueil/About";
import NavMenu from "./components/NavMenu/NavMenu";
import Burger from "./components/Burger/Burger";
import FocusLock from "react-focus-lock";
import Contact from "./components/Contact/Contact.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import AdminPage from "./components/Admin/AdminPage.jsx";
import Login from "./components/Login/Login";

function App() {
  const [role, setRole] = useState("");

  const refreshToken = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/api/admin/refresh",
      withCredentials: true,
    })
      .then((response) => {
        console.log(response.data.admin.role, "refresh here");
        setRole(response.data.admin.role);
        setTimeout(() => {
          refreshToken();
        }, 60 * 60 * 1000 - 10000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    refreshToken();
  }, []);

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <div ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <NavMenu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio role={role} />
            </Route>
            <Route path="/login">
              <Login setRole={setRole} />
            </Route>
            {role === "admin" && (
              <Route path="/admin">
                <AdminPage />
              </Route>
            )}
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
