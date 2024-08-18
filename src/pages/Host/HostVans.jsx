import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HostVans = () => {
  const [hostVans, setHostVans] = useState([]);

  const hostParams = useParams();

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((resp) => resp.json())
      .then((data) => setHostVans(data.vans));
  }, [hostParams.id]);
  console.log(hostVans);

  const hostListedVans = hostVans.map((listedVan) => (
    <div key={listedVan.hostId} className="">
      <Link to={`/api/host/vans/${listedVan.hostId}`}>
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

  return <section>{hostListedVans}</section>;
};
export default HostVans;
