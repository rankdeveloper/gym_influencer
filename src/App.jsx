import "./index.css";
import "./App.scss";
import "./variables.scss";
import Header from "./components/header";
import Misson from "./components/misson";
import VideoCard from "./components/videoCard";
import Services from "./components/ourServices";
import Personalized_Hub from "./components/personalized_hub";
import Marquee from "./components/marquee";
import Transformation from "./components/Transformation";
import What_People_Say from "./components/what_people";
import { FAQ } from "./components/FAQ";
import Gym from "./components/gym";
import Blog from "./components/blog";
import Footer from "./components/footer";
import Banner from "./components/banner";
import Banner_Marquee from "./components/banner-marquee";
import Benefits from "./components/benefits";

export default function App() {
  return (
    <>
      <div className="main-container ">
        <Header />
        <Banner />
        <Banner_Marquee />
        <Misson />
        <VideoCard />
        <Services />
        <Benefits />
        <Personalized_Hub />
        <Marquee />
        <Transformation />
        <What_People_Say />
        <Gym />
        <Blog />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
