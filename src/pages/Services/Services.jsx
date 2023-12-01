import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import Filtros from "./Filtros";
import axios from "axios";

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

  const [filters, setFilters] = useState({
    category: "",
    frequency: "",
    classType: "",
    rate: 0,
    subject: ""
  });

  const navigate = useNavigate();
  const goToServiceDetail = (serviceId) => navigate(`/service/${serviceId}`);

  const fetchServices = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/service/getAvailableServices",
        {
          filters: filters
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.data.status === 200) {
        setServicios(response.data.services);
      }
    } catch (e) {
      setServicios([]);
    }
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filters.category,
    filters.frequency,
    filters.classType,
    filters.rate,
    filters.subject
  ]);

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
        {servicios.map((servicio) => {
          const {
            _id,
            mentorProfilePhoto,
            title,
            summaryDescription,
            price,
            frequency,
            rate,
            mentorName
          } = servicio;

          return (
            <ServiceCard
              key={_id}
              profilePhoto={mentorProfilePhoto}
              title={title}
              summaryDescription={summaryDescription}
              price={price}
              frequency={getFrequencyLabel(frequency)}
              rate={rate}
              nombreProfesor={mentorName}
              onClickHandler={() => goToServiceDetail(_id)}
            />
          );
        })}
      </ServicesContainer>
    </Wrapper>
  );
};

export default Services;
