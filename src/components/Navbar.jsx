import { useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import { Menu, X } from "lucide-react";

import vTrackLogo from "../assets/vtrack-logo.png";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const handleContactFormClick = () => {
    closeMenu();

    // When already on the contact page, React Router may keep the same URL,
    // so Contact's query-string effect does not run a second time.
    if (pathname === "/contact") {
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link
          to="/"
          className="navbar__brand"
          aria-label="vTrack Nevada home"
        >
          <img
            src={vTrackLogo}
            alt="vTrack"
            className="navbar__logo-image"
          />

          <div className="navbar__brand-text">
            <span>by Vichra</span>
            <small>Nevada</small>
          </div>
        </Link>

        <nav
          className={`navbar__nav ${
            menuOpen ? "navbar__nav--open" : ""
          }`}
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/platform"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Platform
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact?section=form"
            onClick={handleContactFormClick}
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Contact Us
          </NavLink>

          <Link
            to="/contact?section=form"
            className="navbar__cta"
            onClick={handleContactFormClick}
          >
            Claim Your Spot
          </Link>
        </nav>

        <button
          className="navbar__menu-button"
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
