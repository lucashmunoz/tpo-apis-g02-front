import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import profilePicture1 from "../../assets/mock-imgs/ana.png";

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
`;

const MisServicios = () => {
  const [servicios, setServicios] = useState([]);

  const navigate = useNavigate();
  const goToServiceDetail = (serviceId) => navigate(`/myservices/${serviceId}`);

  /**
   * Obtiene los servicios totales ofrecidos
   */
  const fetchServices = async () => {
    const response = await fetch("mocks/services.json");
    const { services } = await response.json();

    setServicios(
      services.filter((servicio) => servicio.nombreProfesor === "María")
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
              profilePhoto={profilePicture1}
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
