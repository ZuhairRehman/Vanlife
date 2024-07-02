import { useEffect, useState } from "react";

const Vans = () => {
  const [vanData, setVanData] = useState([]);

  useEffect(() => {
    fetch(`/api/vans`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  const vans = vanData.map((van) => (
    <div key={van.id} className="van-tile">
      <img className="van-img" src={van.imageUrl} />
      <section className="van-info">
        <h3>{van.name}</h3>
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </section>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <section className="vans-container">
      <h1>Explore our van options</h1>
      <div>
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
