import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import linkedinLogo from "assets/redes/linkedin.svg";
import Filtros from "./Filtros";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FiltersContainer = styled.div`
  border-right: 1px solid grey;
  height: 100vh;
  width: 600px;
  padding: 60px 20px;
  margin: auto;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    border-right: 0;
  }
`;

const ServicesContainer = styled.div`
  margin-top: 50px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
`;

const Services = () => {
  const [servicios, setServicios] = useState([]);

  const fetchFilters = async () => {
    const response = await fetch("mocks/services.json");
    const { services } = await response.json();

    setServicios(services);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  return (
    <Wrapper>
      <FiltersContainer>
        <Filtros />
      </FiltersContainer>
      <ServicesContainer>
        {servicios.map((servicio) => {
          const {
            id,
            profilePhoto,
            title,
            summaryDescription,
            price,
            frequency,
            rate,
            classType
          } = servicio;

          return (
            <ServiceCard
              key={id}
              img={linkedinLogo}
              title={title}
              text={summaryDescription}
            />
          );
        })}
      </ServicesContainer>
    </Wrapper>
  );
};

export default Services;
