import React from "react";
import Navbar from "./Components/Navbar.jsx";
import LandingPage from "./Components/LandingPage.jsx";
import Marquee from "./Components/Marquee.jsx";
import About from "./Components/About.jsx";
import Eyes from "./Components/Eyes.jsx";
import Cards from "./Components/Cards.jsx";
import Review from "./Components/Review.jsx";
import WorkList from "./Components/Worklist.jsx";
import MultiCard from "./Components/MultiCard.jsx";
import Ready from "./Components/Ready.jsx";
import Footer from "./Components/Footer.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Card2 from "./Components/Card2.jsx";
import Card3 from "./Components/Card3.jsx";
import Card4 from "./Components/Card4.jsx";
import Card5 from "./Components/Card5.jsx"; 
import Card6 from "./Components/Card6.jsx";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-x-hidden bg-[#F1F1F1]">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Cards />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Review />
      <WorkList />
      <MultiCard />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
