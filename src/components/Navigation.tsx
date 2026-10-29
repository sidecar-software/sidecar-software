import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { page_links } from "./links";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu only once the new route has rendered, so the old page
  // never flashes between the menu hiding and the route changing
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
              onClick={() => {
                // Same page: no route change will close the menu, so close it here
                if (location.pathname === href) setIsMenuOpen(false);
              }}
            >
              {/* Prompt and cursor only show in the mobile terminal-style menu */}
              <span className="nav_prompt" aria-hidden="true">&gt;</span>
              {label}
              <span className="nav_cursor" aria-hidden="true">_</span>
            </NavLink>
          </li>
        ))}
        <li className="nav_tagline" aria-hidden="true">
          Open to every<br />search challenge.
        </li>
      </ul>
    </nav>
  );
}