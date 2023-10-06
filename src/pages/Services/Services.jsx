import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import Filtros from "./Filtros";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FiltersContainer = styled.div`
  height: auto;
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

  @media (max-width: 768px) {
    justify-items: center;
  }
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

  const navigate = useNavigate();
  const goToServiceDetail = (serviceId) => navigate(`/service/${serviceId}`);

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
      filteredServices = filteredServices.filter(
        (servicio) => servicio.category === filters.category
      );
    }

    // Filtramos por Tipo de Clase
    if (filters.classType && filters.classType.length !== 0) {
      filteredServices = filteredServices.filter(
        (servicio) => servicio.classType === filters.classType
      );
    }

    // Filtramos por Frecuencia
    if (filters.frequency && filters.frequency.length !== 0) {
      filteredServices = filteredServices.filter(
        (servicio) => servicio.frequency === filters.frequency
      );
    }

    // Filtramos por Tema
    if (filters.subject && filters.subject.length !== 0) {
      filteredServices = filteredServices.filter(
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
      filteredServices = filteredServices.filter(
        (servicio) => servicio.rate >= filters.rate
      );
    }

    return filteredServices;
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    setServiciosFiltrados(updateServicesWithFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, servicios]);

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
      <FiltersContainer>
        <Filtros setFilters={setFilters} filters={filters} />
      </FiltersContainer>
      <ServicesContainer>
        {serviciosFiltrados.map((servicio, index) => {
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
              profilePhoto={servicio.profilePhoto}
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

export default Services;
