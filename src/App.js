import "./App.css";
import BannerComponent from "./components/BannerComponent";
import Footer from "./components/Footer";
import HotDeals from "./components/HotDeals";
import Navbar from "./components/Navbar";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <>
      <Navbar/>
      <BannerComponent/>
      <HotDeals/>
      <SpecialOffers/>
      <Footer/>
    </>
  );
}

export default App;
