import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/molecules/Footer";
import Header from "components/molecules/Header";
import Home from "pages/Home";
import ComoFunciona from "components/organisms/ComoFunciona";
import SobreNosotros from "pages/SobreNosotros";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/comofunciona" element={<ComoFunciona />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
