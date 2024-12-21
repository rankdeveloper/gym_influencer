import "./index.css";
import "./App.scss";
import "./variables.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WorkOutPlan from "./pages/WorkOutPlan";
import ScrollToHash from "./components/scroll";

export default function App() {
  return (
    <>
      <div className="main-container ">
        <ScrollToHash />
        <Header />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/workout-plans" element={<WorkOutPlan />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}
