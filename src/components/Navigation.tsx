import { NavLink, useLocation } from "react-router";
import { page_links } from "./links";

export default function Navigation() {
  const location = useLocation();
  const pathname = location.pathname;

  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      <ul className="flex space-x-8 justify-end">
        {page_links.map(({ href, label }) => (
          <li key={href}>
            <NavLink
              to={href}
              className={`relative px-2 py-1 text-sm transition-colors duration-200
                ${isActive(href) 
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary" 
                  : "text-gray-500 hover:text-primary"
                }`}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
