import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/molecules/Footer";
import Header from "components/molecules/Header";
import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import SobreNosotros from "pages/SobreNosotros";
import Services from "pages/Services";
import ServiceDetail from "pages/ServiceDetail";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
`;

function App() {
  return (
    <>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
