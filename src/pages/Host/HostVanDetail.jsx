import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const HostVanDetail = () => {
  const [selectedHostVan, setSelectedHostVan] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setSelectedHostVan(data.vans));
  }, []);

  return (
    <>
      <div>
        {selectedHostVan ? (
          <section className="flex">
            <Link to=".." relative="path">
              <span>Back to all vans</span>
            </Link>
            <img src={selectedHostVan.imageUrl} alt={selectedHostVan.name} />
            <div className="">
              <h2>{selectedHostVan.name}</h2>
              <p className="">
                ${selectedHostVan.price}
                <span>/day</span>
              </p>
            </div>
          </section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <nav className="flex gap-3 mt-5 text-2xl">
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="."
          end
        >
          Details
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="pricing"
        >
          Pricing
        </NavLink>

        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "active: underline decoration-orange-400"
              : "hover:underline text-gray-600";
          }}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
export default HostVanDetail;
