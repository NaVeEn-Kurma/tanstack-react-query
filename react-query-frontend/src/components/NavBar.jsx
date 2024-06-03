import React from "react";
import { Link } from "react-router-dom";

const navList = [
  { path: "/", name: "Home" },
  { path: "/users", name: "users" },
];
const Navbar = () => {
  return (
    <nav>
      <ul>
        {navList.map((navItem, index) => (
          <li key={index}>
            <Link to={navItem.path}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
