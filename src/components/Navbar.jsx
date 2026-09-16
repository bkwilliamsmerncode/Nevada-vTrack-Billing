import { useEffect, useState } from "react";
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

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "navbar__link navbar__link--active"
                : "navbar__link"
            }
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="navbar__cta"
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
