import { Link } from "react-router-dom";
import videoBG from "../assets/HomepageImages/camper.mp4";


const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted></video>
      <div className="content">
        <h1 className="hero-title">
          You got travel plans, We got travel Vans.
        </h1>
        <p>
          Add adventure to your life by joining the #Vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
      </div>
      <Link to="vans">Find your Van</Link>
    </div>
  );
};
export default Home;
