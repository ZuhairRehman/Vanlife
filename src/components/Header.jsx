import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 sm:w-full sm:h-[4vh] sm:mb-[1vh] z-30">
      <nav className="flex justify-between items-center py-4 sm:px-5 px-2 font-sans bg-[#fddfba] sticky top-0 left-0 w-full z-30">
        <div>
          <Link
            className="sm:text-4xl text-3xl font-semibold  text-black"
            to="/"
          >
            #VANLIFE
          </Link>
        </div>

        <div className="flex sm:gap-11 gap-7 max-sm:text-sm text-2xl font-semibold">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? " active: underline decoration-orange-400"
                : "hover:underline text-gray-600";
            }}
            to="/Host"
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? " active: underline decoration-orange-400"
                : "hover:underline text-gray-600";
            }}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? " active: underline decoration-orange-400"
                : " hover:underline  text-gray-600";
            }}
            to="/vans"
          >
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Header;
