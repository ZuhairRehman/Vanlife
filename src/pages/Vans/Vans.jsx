import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vanData, setVanData] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const filteredHostVans = typeFilter
    ? vanData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vanData;

  const vans = filteredHostVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
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

  return (
    <section className="vans-container bg-orange-400 text-white font">
      <h1>Explore our van options</h1>
      <div className="flex gap-3">
        <Link to="?type=simple">Simple</Link>
        <Link to="?type=luxury">Luxury</Link>
        <Link to="?type=rugged">Rugged</Link>
        <Link to=".">Clear filters</Link>
      </div>
      <div className="van-grid">{vans}</div>
    </section>
  );
};
export default Vans;
