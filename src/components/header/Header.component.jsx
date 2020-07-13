import React, { useContext } from "react";
import Context from "../../context";
import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
  const { state, dispatch } = useContext(Context);
  const handleNav = () => {
    if (!state.showNav) {
      dispatch({
        type: "SHOW_NAV",
        payload: !state.showNav,
      });
    }
  };
  return (
    <div className="container-fluid header">
      <div className="row header-wrap">
        <div className="col header_title">
          <img
            src="./images/httf-logo-icon.png"
            alt="Hack To The Future logo"
          />
          <h1>Hack To The Future</h1>
        </div>
        <div className="col header_links align-self-end">
          <ul className="row">
            <li className="col">
              <Link to="/">Home</Link>
            </li>
            <li className="col">
              <Link to="/about">About</Link>
            </li>
            <li className="col">
              <Link to="/participate">Participate</Link>
            </li>
            <li className="col">
              <Link to="/volunteer">Volunteer</Link>
            </li>
            <li className="col">
              <Link to="/partners">Partner</Link>
            </li>
          </ul>
        </div>
        <div className="col hamburger" onClick={handleNav}></div>
      </div>
    </div>
  );
};

export default Header;
