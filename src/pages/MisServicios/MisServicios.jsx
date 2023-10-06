import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import AgregarServicioCard from "./AgregarServicioCard";
import styled from "styled-components";
import UserContext from "user-context";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServicesContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;

  @media (max-width: 768px) {
    justify-items: center;
  }
`;

const MisServicios = () => {
  const [servicios, setServicios] = useState([]);

  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const navigate = useNavigate();
  const goToServiceDetail = (serviceId) => navigate(`/myservices/${serviceId}`);

  /**
   * Obtiene los servicios totales ofrecidos
   */
  const fetchServices = async () => {
    const response = await fetch("mocks/services.json");
    const { services } = await response.json();

    setServicios(
      services.filter((servicio) => servicio.nombreProfesor === "Juan")
    );
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchServices();
  }, []);

  const getFrequencyLabel = (frequencyValue) => {
    switch (frequencyValue) {
      case "UNICA":
        return "Única";
      case "SEMANAL":
        return "Semanal";
      case "MENSUAL":
        return "Mensual";
      default:
        return "";
    }
  };

  return (
    <Wrapper>
      <ServicesContainer>
        <AgregarServicioCard />
        {servicios.map((servicio, index) => {
          const {
            id,
            profilePhoto,
            title,
            summaryDescription,
            price,
            frequency,
            rate,
            nombreProfesor
          } = servicio;

          return (
            <ServiceCard
              key={id}
              profilePhoto={loggedUser.profilePhoto}
              title={title}
              summaryDescription={summaryDescription}
              price={price}
              frequency={getFrequencyLabel(frequency)}
              rate={rate}
              nombreProfesor={nombreProfesor}
              onClickHandler={() => goToServiceDetail(id)}
            />
          );
        })}
      </ServicesContainer>
    </Wrapper>
  );
};

export default MisServicios;
