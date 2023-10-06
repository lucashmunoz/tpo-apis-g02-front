import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/molecules/Footer";
import Header from "components/molecules/Header";
import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import Hirings from "pages/Hirings";
import MisServicios from "pages/MisServicios";
import SobreNosotros from "pages/SobreNosotros";
import Services from "pages/Services";
import ServiceDetail from "pages/ServiceDetail";
import styled from "styled-components";
import UserContext, { initialUserContextState } from "user-context";
import { useState } from "react";
import MyServiceDetails from "pages/MyServiceDetails";

const Main = styled.main`
  position: relative;
  flex: 1;
`;

function App() {
  const [loggedUser, setLoggedUser] = useState(initialUserContextState);

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/about" element={<SobreNosotros />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/:id" element={<ServiceDetail />} />
            <Route path="/hirings" element={<Hirings />} />
            <Route path="/myservices" element={<MisServicios />} />
            <Route path="/myservices/:id" element={<MyServiceDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
