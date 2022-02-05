import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavItem = (props: any) => {
  return (
    <li className="flex-2 hover:bg-blue-400 transition-colors">
      <Link to={props.to} className="text-center block py-3 px-4">
        {props.text}
      </Link>
    </li>
  );
};

function App() {
  return (
    <div className="App">
      <nav className="h-12 bg-blue-300">
        <ul className="flex justify-end">
          <NavItem to="/tests" text="Testy" />
          <NavItem to="/notes" text="Poznámky" />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
