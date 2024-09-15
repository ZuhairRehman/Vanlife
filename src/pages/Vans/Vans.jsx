import { useState } from "react";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../../api";

export function loader() {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const vanData = useLoaderData();
  console.log(vanData);

  const filteredHostVans = typeFilter
    ? vanData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vanData;

  const vans = filteredHostVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img className="van-img" src={van.imageUrl} />
        <section className="van-info">
          <h3>{van.name}</h3>
          <p>
            {
              <span className="van-price">
                ${van.price}
              </span> /* dollar sign is for the price not for the object property in JSX as it is not needed to be is JS*/
            }
            <span>/day</span>
          </p>
        </section>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <section className="vans-container bg-orange-400 text-white font">
      <h1>Explore our van options</h1>
      <div className="flex gap-3">
        <button onClick={() => handleFilterChange("type", "simple")}>
          Simple
        </button>
        <button onClick={() => handleFilterChange("type", "luxury")}>
          Luxury
        </button>
        <button onClick={() => handleFilterChange("type", "rugged")}>
          Rugged
        </button>
        {typeFilter ? (
          <button onClick={() => handleFilterChange("type", null)}>
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="van-grid">{vans}</div>
    </section>
  );
};
export default Vans;
