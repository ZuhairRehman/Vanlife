import { Link } from "react-router-dom";
import grandCanyonVan from "../assets/AboutpageImages/grandcanyonVan.jpg";
import vanOffice from "../assets/AboutpageImages/van-0ffice.jpg";
import VanParty from "../assets/AboutpageImages/vanParty.jpg";

const About = () => {
  return (
    <section className="sm:mt-16 bg-[#fddfba]">
      <div className="sm:flex m-3 sm:m-4 sm:h-full">
        <div className="sm:object-fill">
          <img
            className="rounded-lg sm:rounded-lg h-full sm:w-full "
            src={VanParty}
            alt=""
          />
        </div>

        <div className="sm:text-center">
          <h1 className="font-extrabold sm:text-6xl mt-2 sm:leading-normal text-3xl sm:p-6 sm:mb-5">
            Don't squeeze in a sedan when you could relax in a Van
          </h1>
          <p className="sm:text-2xl">
            Our mission is to enliven your road trip with the perfect travel van
            rental.
            <br />
            <p className="sm:mb-10">
              Our vans are <span className="font-bold">re-certified</span>{" "}
              before each trip to ensure your travel plans can go off without a
              hitch.
              <br />
              (Hitch costs extra 😉)
            </p>
          </p>
        </div>
      </div>

      <section className="sm:h-full sm:flex sm:gap-20 gap-3 sm:mt-1 p-3 align-top">
        <div className="">
          <img
            className="rounded-lg sm:w-full mb-5 align-bottom"
            src={vanOffice}
            alt=""
          />
        </div>

        <div className="sm:flex sm:flex-col justify-center">
          <div className="mb-2 sm:h-full sm:w-full bg-[#f0a066] p-5 rounded-lg ">
            <p className=" sm:mb-1 sm:text-2xl">
              <span className="font-extrabold">Our team</span> is full of Van
              life enthusiasts who know firsthand the magic of touring the world
              on 4 wheels.
            </p>
            <h2 className="sm:text-5xl sm:leading-normal sm:mb-4">
              Your destination is waiting. <br />
              Your Van is ready
            </h2>
            <br />
            <Link
              className="text-right bg-black text-white mb-2 p-3 sm:px-28 px-10 text-2xl
               sm:py-6 rounded-lg"
              to="/vans"
            >
              Explore our Vans
            </Link>
          </div>
          <img
            className="hidden sm:rounded-lg sm:w-full sm:h-[75%] sm:inline-block"
            src={grandCanyonVan}
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default About;
