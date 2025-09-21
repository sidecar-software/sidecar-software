import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { page_links } from "./links";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when the menu is open on mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav>
      <button
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        className="nav-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
      <ul 
        id="primary-navigation" 
        className={isMenuOpen ? "open" : ""}
      >
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