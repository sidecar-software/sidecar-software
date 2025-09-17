import { NavLink } from "react-router";
import { useState } from "react";
import { page_links } from "./links";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <button
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        className="nav-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul id="primary-navigation" className={isMenuOpen ? "open" : ""}>
        {page_links.map(({ href, label }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
