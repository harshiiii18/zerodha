import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="media/images/logo.svg" />

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
              <img src="media/images/googlePlayBadge.svg" />
              <img src="media/images/appstoreBadge.svg" />
            </div>
          </div>

          <div>
            <h4>Account</h4>

            <a>Open demat account</a>
            <a>Minor demat account</a>
            <a>NRI demat account</a>
            <a>HUF demat account</a>
            <a>Commodity</a>
            <a>Dematerialisation</a>
            <a>Fund transfer</a>
            <a>MTF</a>
          </div>

          <div>
            <h4>Support</h4>

            <a>Contact us</a>
            <a>Support portal</a>
            <a>How to file a complaint?</a>
            <a>Status of your complaints</a>
            <a>Bulletin</a>
            <a>Circular</a>
            <a>Z-Connect blog</a>
            <a>Downloads</a>
          </div>

          <div>
            <h4>Company</h4>

            <a>About</a>
            <a>Philosophy</a>
            <a>Press & media</a>
            <a>Careers</a>
            <a>Zerodha Cares (CSR)</a>
            <a>Zerodha.tech</a>
            <a>Open source</a>
            <a>Referral program</a>
          </div>

          <div>
            <h4>Quick links</h4>

            <a>Upcoming IPOs</a>
            <a>Brokerage charges</a>
            <a>Market holidays</a>
            <a>Economic calendar</a>
            <a>Calculators</a>
            <a>Markets</a>
            <a>Sectors</a>
            <a>Gift Nifty</a>
          </div>
        </div>

        <div className="disclaimer">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI
            Registration no.: INZ000031633 CDSL: Depository services through
            Zerodha Securities Pvt. Ltd. SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Bengaluru - 560078.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers.
          </p>
        </div>

        <div className="bottom-links">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>MSEI</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>For investor's attention</span>
          <span>Investor charter</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
