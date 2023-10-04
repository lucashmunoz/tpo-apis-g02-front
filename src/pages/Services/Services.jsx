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
  width: 450px;
  padding: 60px 20px;
  margin-left: auto;
  margin-right: auto;

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
  const [serviciosFiltrados, setServiciosFiltrados] = useState([]);

  const [filters, setFilters] = useState({
    category: "",
    frequency: "",
    classType: "",
    rate: 0,
    subject: ""
  });

  /**
   * Obtiene los servicios totales ofrecidos
   */
  const fetchServices = async () => {
    const response = await fetch("mocks/services.json");
    const { services } = await response.json();

    setServicios(services);
    setServiciosFiltrados(services);
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchServices();
  }, []);

  const eliminarTildes = (str) => {
    return str
      .replace("á", "a")
      .replace("é", "e")
      .replace("í", "i")
      .replace("ó", "o")
      .replace("ú", "u")
      .replace("ü", "u");
  };

  const updateServicesWithFilters = () => {
    let filteredServices = servicios;

    // Filtramos por categoria si hay elegida
    if (filters.category && filters.category.length !== 0) {
      filteredServices = servicios.filter(
        (servicio) => servicio.category === filters.category
      );
    }

    // Filtramos por Tipo de Clase
    if (filters.classType && filters.classType.length !== 0) {
      filteredServices = servicios.filter(
        (servicio) => servicio.classType === filters.classType
      );
    }

    // Filtramos por Frecuencia
    if (filters.frequency && filters.frequency.length !== 0) {
      filteredServices = servicios.filter(
        (servicio) => servicio.frequency === filters.frequency
      );
    }

    // Filtramos por Tema
    if (filters.subject && filters.subject.length !== 0) {
      filteredServices = servicios.filter(
        (servicio) =>
          eliminarTildes(
            servicio.summaryDescription.toLocaleLowerCase()
          ).includes(eliminarTildes(filters.subject.toLocaleLowerCase())) ||
          eliminarTildes(servicio.title.toLocaleLowerCase()).includes(
            eliminarTildes(filters.subject.toLocaleLowerCase())
          )
      );
    }

    // Filtramos por Calificación
    if (filters.rate > 0) {
      filteredServices = servicios.filter(
        (servicio) => servicio.rate >= filters.rate
      );
    }

    return filteredServices;
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    setServiciosFiltrados(updateServicesWithFilters);
  }, [filters]);

  return (
    <Wrapper>
      <FiltersContainer>
        <Filtros setFilters={setFilters} />
      </FiltersContainer>
      <ServicesContainer>
        {serviciosFiltrados.map((servicio) => {
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
