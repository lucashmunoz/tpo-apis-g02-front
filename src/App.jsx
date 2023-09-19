import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/molecules/Footer";
import Header from "components/molecules/Header";
import Home from "pages/Home";
import ComoFunciona from "pages/ComoFunciona";
import SobreNosotros from "pages/SobreNosotros";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
