
import "./input.css";

import HeroPage from './components/HeroPage';
import Infrasctructure from './components/Infrasctructure';
import Experience from './components/Experience';
import SeamlessExp from './components/SeamlessExp';
import Bridging from "./components/Bridging";
import VirtualCards from "./components/VirtualCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" pb-[80px] general bg-black">
      <HeroPage />
      <Infrasctructure />
      <Experience />
      <SeamlessExp />
      <Bridging />
      <VirtualCards />
      <Footer/>
    </div>
  );
}

export default App