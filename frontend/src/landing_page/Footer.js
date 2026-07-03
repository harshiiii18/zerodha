import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="media/images/logo.svg" alt="Zerodha logo" />

            <p>
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div className="social">
              <span>𝕏</span>
              <span>f</span>
              <span>◎</span>
              <span>in</span>
            </div>

            <hr />

            <div className="social second">
              <span>▶</span>
              <span>◉</span>
              <span>➤</span>
            </div>

            <div className="apps">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </div>
          </div>

          <div>
            <h4>Account</h4>
            <a href="#!">Open demat account</a>
            <a href="#!">Minor demat account</a>
            <a href="#!">NRI demat account</a>
            <a href="#!">HUF demat account</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#!">Contact us</a>
            <a href="#!">Support portal</a>
            <a href="#!">Complaints</a>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#!">About</a>
            <a href="#!">Careers</a>
            <a href="#!">Open source</a>
          </div>

          <div>
            <h4>Quick links</h4>
            <a href="#!">IPO</a>
            <a href="#!">Brokerage</a>
            <a href="#!">Markets</a>
          </div>
        </div>

        <div className="disclaimer">
          <p>
            Investments are subject to market risks. Read all documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;