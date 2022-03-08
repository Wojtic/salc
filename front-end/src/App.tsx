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
        <div className="h-full w-20 text-center text-xl leading-[3rem]">
          <a href="/">Salc</a>
        </div>
        <ul className="flex justify-end top-0 absolute right-0">
          <NavItem to="/tests" text="Testy" />
          <NavItem to="/notes" text="Poznámky" />
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
