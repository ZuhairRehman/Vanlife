import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((resp) => resp.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostListedVans = hostVans.map((listedVan) => (
    <div key={listedVan.id} className="">
      <Link to={`${listedVan.id}`}>
        <h1>Your listed Vans</h1>
        <section className="flex">
          <img src={listedVan.imageUrl} alt="" />
          <h3>{listedVan.name}</h3>
          <p className="">
            {
              <span>
                ${listedVan.price}
              </span> /* dollar sign is for the price not for the object property in JSX as it is not needed to be converted is JS*/
            }
            <span>/day</span>
          </p>
        </section>
      </Link>
    </div>
  ));

  return (
    <div>
      {hostVans.length > 0 ? (
        <section> {hostListedVans}</section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default HostVans;
