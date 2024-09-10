import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { selectedHostVan } = useOutletContext();

  return (
    <p className="">
      ${selectedHostVan.price}
      <span>/day</span>
    </p>
  );
};
export default HostVanPricing;
