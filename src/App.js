import React, { useContext, useReducer } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Context from "./context";
import reducer from "./reducer";

import "./App.scss";
import Header from "./components/header/Header.component";
import Footer from "./components/footer/footer.component";

import Home from "./pages/home/home.page";
import About from "./pages/about/about.page";
import Participate from "./pages/participate/participate.component";
import Volunteer from "./pages/volunteer/volunteer.componenet";
import Partners from "./pages/partners/partners.components";

function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);
  const mobileNavClick = () => {
    dispatch({
      type: "SHOW_NAV",
      payload: !state.showNav,
    });
  };
  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="main container-fluid">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/participate" component={Participate} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/partners" component={Partners} />
        </Switch>
        <Footer />
        <div className={`mobileNav ${state.showNav ? "show" : ""}`}>
          <div className="mobilenNav-header row">
            <div className="col logo">
              {" "}
              <img
                src="./images/httf-logo-icon.png"
                alt="Hack To The Future logo"
              />
            </div>
            <div className="col close">
              <p onClick={mobileNavClick}>x</p>
            </div>
          </div>
          <div className="mobileNav-links">
            <ul className="row">
              <li className="col">
                <Link to="/" onClick={mobileNavClick}>
                  Home
                </Link>
              </li>
              <li className="col">
                <Link to="/about" onClick={mobileNavClick}>
                  About
                </Link>
              </li>
              <li className="col">
                <Link to="/participate" onClick={mobileNavClick}>
                  Participate
                </Link>
              </li>
              <li className="col">
                <Link to="/volunteer" onClick={mobileNavClick}>
                  Volunteer
                </Link>
              </li>
              <li className="col">
                <Link to="/partners" onClick={mobileNavClick}>
                  Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
