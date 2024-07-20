import { Link } from "react-router-dom";
import videoBG from "../assets/HomepageImages/camper.mp4";

const Home = () => {
  return (
    <div className="max-sm:h-full">
      <video
        className="sm:h-full sm:w-full h-80 sm:object-cover object-contain absolute sm:top-0 sm:left-0 top-0 left-0 z-10"
        src={videoBG}
        autoPlay
        loop
        muted
      ></video>
      <div className="sm:bg-black/35 sm:absolute sm:top-0 sm:left-0 sm:h-full sm:w-full z-20"></div>

      <div className="sm:absolute absolute top-72 w-full text-4xl sm:bg-transparent h-28 sm:w-[25rem] sm:z-30 z-30 sm:top-32 m-0 px-2 sm:right-0">
        <h1 className="sm:leading-tight sm:text-[5rem] max-sm:text-[rgb(152,116,49)] text-yellow-200 text-center sm:inline-block ">
          You got travel plans, We got travel Vans.
        </h1>
      </div>

      <p className="font-sans sm:text-slate-100 sm:p-2 sm:text-center absolute sm:bottom-4 sm:right-3 sm:left-3 z-30 bottom-20 sm:text-2xl text-lg left-4 text-slate-700">
        Add adventure to your life by joining the #Vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link
        className="sm:absolute z-20 sm:right-10 sm:py-4 sm:px-24 max-sm:py-4 max-sm:px-24 max-sm:left-4 absolute bottom-52  text-white bg-[#ff8c38] font-bold sm:text-xl text-lg sm:rounded-3xl rounded-3xl"
        to="vans"
      >
        Find your Van
      </Link>
    </div>
  );
};
export default Home;
