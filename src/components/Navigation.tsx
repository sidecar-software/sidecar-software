import { NavLink, useLocation } from "react-router";
import { page_links } from "./links";

export default function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      <ul>
        {page_links.map(({ href, label }) => (
          <li key={href}>
            <NavLink to={href}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
