import React, { Component } from "react";
import logo from "../myLogo.png";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col col-auto my-auto">
              <a href="/" className="logo">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="col my-auto text-right">
              <div className="mainmenu">
                <ul>
                  <li>
                    <a href="/unsplash-api-project/">Home</a>
                  </li>
                  <li>
                    <a href="/unsplash-api-project/about">About</a>
                  </li>
                  <li>
                    <a href="/unsplash-api-project/disclaimer">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/unsplash-api-project/credits">Credits</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
