import { Link } from "react-router-dom";

import vTrackLogo from "../assets/vtrack-logo.png";

import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/">
              <img
                src={vTrackLogo}
                alt="vTrack by Vichra"
                className="footer__logo"
              />
            </Link>

            <p>
              Provider management software designed to simplify EVV,
              billing, payroll, authorizations, scheduling, recipient
              tracking, and agency operations.
            </p>

            <span className="footer__nevada">
              Now serving Nevada provider agencies.
            </span>
          </div>

          <div className="footer__column">
            <h3>Navigate</h3>

            <Link to="/">Home</Link>
            <Link to="/platform">Platform</Link>
            <Link to="/about">About</Link>
            <Link to="/contact?section=form">Contact Us</Link>
          </div>

          <div className="footer__column">
            <h3>Platform</h3>

            <Link to="/platform">EVV</Link>
            <Link to="/platform">Billing & Claims</Link>
            <Link to="/platform">Authorizations</Link>
            <Link to="/platform">Payroll</Link>
            <Link to="/platform">Recipient Tracking</Link>
          </div>

          <div className="footer__column">
            <h3>Nevada</h3>

            <a href="https://www.adsd.nv.gov/program-policy/" target="_blank" rel="noopener noreferrer">Personal Care Agencies</a>
            <a href="https://www.adsd.nv.gov/" target="_blank" rel="noopener noreferrer">Home Health Agencies</a>
            <a href="https://www.adsd.nv.gov/contact/" target="_blank" rel="noopener noreferrer">FE &amp; PD Waiver Providers</a>
            <a href="https://adsd.nv.gov/programs/intellectual/sla/sla/" target="_blank" rel="noopener noreferrer">Residential &amp; IDD Providers</a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <span>
              © {year} vTrack Billing by Vichra. All rights reserved.
            </span>

            <span className="footer__separator">|</span>

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <span className="footer__separator">|</span>

            <Link to="/terms-of-use">
              Terms of Use
            </Link>
          </div>

          <p>
            vTrack by Vichra, Nevada
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
