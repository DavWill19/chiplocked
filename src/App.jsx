import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Shop } from "./components/shop";
import { About } from "./components/about";
import { Chips } from "./components/chips";
import { Rules } from "./components/rules";
import { Play } from "./components/play";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="bodyWidth">
      <Navigation />
      <Header data={landingPageData.Header} />
      <Chips data={landingPageData.chips} />
      <Rules data={landingPageData.rules} />
      <Play data={landingPageData.play} />
      <Shop data={landingPageData.shop} />
      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
