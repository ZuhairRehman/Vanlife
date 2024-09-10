import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { selectedHostVan } = useOutletContext();

  return <img src={selectedHostVan.imageUrl} alt={selectedHostVan.name} />;
};
export default HostVanPhotos;
