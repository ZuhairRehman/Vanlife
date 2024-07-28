import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  console.log(vanData);

  const vans = vanData.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img className="van-img" src={van.imageUrl} />
        <section className="van-info">
          <h3>{van.name}</h3>
          <p>
            <span className="van-price">${van.price}</span>
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
      <div className="list-grid">
        <ul className="filter-labels">
          <li>
            <a href="">Simple</a>
          </li>
          <li>
            <a href="">Luxury</a>
          </li>
          <li>
            <a href="">Rugged</a>
          </li>
        </ul>
        <a href="">Clear filters</a>
      </div>
      <div className="van-grid">{vans}</div>
    </section>
  );
};
export default Vans;
