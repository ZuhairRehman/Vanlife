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
          to="/host"
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
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? " active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostLayout;
