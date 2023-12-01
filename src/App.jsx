import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import Header from "components/Header";
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
import NewService from "pages/NewService";
import BackToTop from "components/BackToTop";
import MyProfile from "pages/MyProfile";

const Main = styled.main`
  flex: 1;
  background-color: #ffffff;
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
            <Route path="/newservice" element={<NewService />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
        <Footer />
        <BackToTop />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
