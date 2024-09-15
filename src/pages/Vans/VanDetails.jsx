import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const VanDetails = () => {
  const [van, setVan] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div>
      <Link to={`..${search}`} relative="path" className="">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="flex">
          <img src={van.imageUrl} />
          <div className="">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
          </div>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
export default VanDetails;
