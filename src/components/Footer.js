import React from "react";

function Footer() {
  return (
    <footer>
      <div className="conatiner">
        <div className="row">
          <div className="col text-center">
            <h2>Nadim's unsplash Photos</h2>
            <h3>+880-1680-761472</h3>
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">YouTube</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="copyright-text">&copy; 2023 The71Agency</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
