import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import linkedinLogo from "assets/redes/linkedin.svg";
import Filtros from "./Filtros";

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
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-grow: unset;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const Services = () => {
  return (
    <Wrapper>
      <FiltersContainer>
        <Filtros />
      </FiltersContainer>
      <ServicesContainer>
        <ServiceCard
          img={linkedinLogo}
          title={"Matematicas"}
          text={
            "Nuestras clases de matematicas son las más detalladas de cualquier plataforma."
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Programación"}
          text={"Enseñamos programacion Web y programacion orientada a objetos"}
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Zumba"}
          text={
            "Enseñamos zumba a distancia, mira nuestras clases pre grabado cuando lo desees"
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Estadistica"}
          text={
            "Cursas con Dopazo? Vas a necesitar clases particulares, entra y mira más sobre nuestras clases"
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Finanzas"}
          text={
            "Necesitas dejar de gastar y organizar tus finanzas? Sumate a nuestras clases"
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Matematicas"}
          text={
            "Nuestras clases de matematicas son las más detalladas de cualquier plataforma."
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Programación"}
          text={"Enseñamos programacion Web y programacion orientada a objetos"}
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Zumba"}
          text={
            "Enseñamos zumba a distancia, mira nuestras clases pre grabado cuando lo desees"
          }
        />
        <ServiceCard
          img={linkedinLogo}
          title={"Estadistica"}
          text={
            "Cursas con Dopazo? Vas a necesitar clases particulares, entra y mira más sobre nuestras clases"
          }
        />
      </ServicesContainer>
    </Wrapper>
  );
};

export default Services;
