import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { selectedHostVan } = useOutletContext();

  return (
    <section>
      <h4>Name: {selectedHostVan.name}</h4>
      <h4>Category: {selectedHostVan.type}</h4>
      <h4>Description: {selectedHostVan.description}</h4>
      <h4>Price: {selectedHostVan.price}</h4>
    </section>
  );
};
export default HostVanInfo;
