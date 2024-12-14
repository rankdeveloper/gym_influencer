import "./index.css";
import "./App.scss";
import "./variables.scss";
import Header from "./components/header";
import Trusted_user from "./components/trusted_user";
import Animated_Text from "./components/text-animation";
import Misson from "./components/misson";
import VideoCard from "./components/videoCard";

export default function App() {
  return (
    <>
      <div className="main-container ">
        <Header />
        <div className="banner  ">
          <div className="absolute  top-1/4  bottom-1/2 !z-50">
            <Trusted_user />
            <h1 className="text-[#eb0000] text-7xl leading-normal font-black text-center px-20">
              Track Your Fitness Journey
            </h1>
            <p className="text-[#dcdcdc] text-base leading-6 font-normal text-center px-52">
              Discover the ultimate fitness companion with GymFluencer.
              Effortlessly log your workouts, count reps, and track calories
              burned. Stay motivated and achieve your goals with our
              user-friendly interface.
            </p>
          </div>
        </div>
        <Misson />
        <VideoCard />
      </div>
    </>
  );
}
