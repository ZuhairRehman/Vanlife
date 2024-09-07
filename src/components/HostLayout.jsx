import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex gap-3 mt-10 text-2xl">
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
