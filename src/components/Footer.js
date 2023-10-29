import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2>Nadim Mahmud Shuvo (JavaScript Developer)</h2>
              <a href="tel:+8801680761472" className="btn btn-primary btn-lg">
                +880-1680-761472
              </a>
              <div className="footer-menu">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/nadimshuvo1997"
                      className="hover-overlay"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/nadimshuvo1997"
                      className="hover-overlay"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/nadimshuvo"
                      className="hover-overlay"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/nadimmahmudshuvo/"
                      className="hover-overlay"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <h5 className="copyright-text">@2023 The71Agency</h5>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
