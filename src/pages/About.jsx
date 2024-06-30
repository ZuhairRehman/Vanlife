import { Link } from "react-router-dom";
import grandCanyonVan from "../assets/AboutpageImages/grandcanyonVan.jpg";
import relaxingmountain from "../assets/AboutpageImages/relaxingmountain.jpg";
import VanParty from "../assets/AboutpageImages/vanParty.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="cta">
        <h1>Don't squeeze in a sedan when you could relax in a Van</h1>

        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are re-certified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of Van life enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <h2>
          Your destination is waiting. <br />
          Your Van is ready
        </h2>
        <br />
        <Link className="cta-btn" to="/vans">
          Explore our Vans
        </Link>
      </div>

      <div className="container-right">
        <img className="container-right-img1" src={grandCanyonVan} alt="" />
        <img className="container-right-img2" src={relaxingmountain} alt="" />
        <img className="container-right-img2" src={VanParty} alt="" />
      </div>
    </div>
  );
};

export default About;
