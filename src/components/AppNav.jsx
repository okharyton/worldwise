import { nav } from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
export default function AppNav() {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
    </nav>
  );
}
