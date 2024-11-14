import Hero from "./Hero";
import Featured from "./Featured";
import About from "./About";
import Gallery from "./Gallery";
import Dashboard from "./Dashboard";
import Services from "./Services"

const Home = () => {
  return (
    <>
      <Dashboard/>
      <Hero />
      <Services/>
      <Featured />
      <About />
      <Gallery />
    </>
  );
};

export default Home;
