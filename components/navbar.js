import Link from "next/link";
import { useState } from "react";
import Navitems from "./navitems";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (window.innerWidth < 640) setActive(!active);
  };

  return (
    <nav className="flex w-full items-center flex-wrap bg-blue-300 p-1 fixed top-0 z-50 shadow-sm">
      {/* hamburger button */}
      <button
        className="inline-flex p-3 hover:bg-blue-600 rounded sm:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* nav items */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full sm:inline-flex sm:flex-grow sm:w-auto sm:justify-center`}
      >
        {/* <div className="sm:inline-flex sm:flex-row sm:w-auto w-full sm:items-center flex flex-col sm:h-auto"> */}
        <div className="sm:inline-flex sm:flex-row sm:w-auto w-full sm:items-center flex flex-col sm:h-auto">
          <Navitems href="" func={handleClick} className="mr-8">
            Home
          </Navitems>
          <Navitems href="projects" func={handleClick}>
            Projects
          </Navitems>
          {/* <Navitems href="donate" func={handleClick}>
            Donate
          </Navitems>
          <Navitems href="ideas" func={handleClick}>
            Ideas
          </Navitems>
          <Navitems href="trading" func={handleClick}>
            Trading
          </Navitems>
          <Navitems href="my-cat" func={handleClick}>
            My Cat
          </Navitems> */}
        </div>
      </div>
    </nav>
  );
}
