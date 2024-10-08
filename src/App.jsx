import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import About from "./pages/About.jsx";
import "./App.css";
import "./index.css";
import Home from "./pages/Home.jsx";
import Vans, { loader as vansListLoader } from "./pages/Vans/Vans.jsx";
import VanDetails from "./pages/Vans/VanDetails.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import "./server";
import HostLayout from "./components/HostLayout.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansListLoader}
      />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
