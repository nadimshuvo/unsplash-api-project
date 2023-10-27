import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Nadim's Photo showcase</h2>
              <h3>
                <a href="tel:+8801680761472">+880-1680-761472</a>
              </h3>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/nadimshuvo1997"
                      className="footer-link"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nadimshuvo1997"
                      className="footer-link"
                    >
                      Twitter(X)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCbfZ5w9FQMDJ_AuvTmUKLDA"
                      className="footer-link"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nadimmahmudshuvo/"
                      className="footer-link"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <b>&copy;2023 The71Agency</b>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
