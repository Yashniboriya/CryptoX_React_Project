import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Coins from "./component/Coins";
import Exchange from "./component/Exchange";
import CoinDetails from "./component/CoinDetails";
import Exchanges from "./component/Exchange";
import Footer from "./component/Footer";


function App() {
  return (
    <Router>

      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetails />} />

      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
