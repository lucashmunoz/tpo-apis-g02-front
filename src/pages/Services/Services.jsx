import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import styled from "styled-components";
import Filtros from "./Filtros";
import sampleImage from "../../assets/icons/UserSampleIcon.png";
import axios from "axios";
import { PuffLoader } from "react-spinners";

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

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Services = () => {
  const [servicesLoading, setServicesLoading] = useState(false);

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
    setServicesLoading(true);
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

    setServicesLoading(false);
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
        <Filtros setFilters={setFilters} />
      </FiltersContainer>

      {servicesLoading ? (
        <LoaderWrapper>
          <PuffLoader color="#22c55e" />
        </LoaderWrapper>
      ) : (
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
                profilePhoto={
                  mentorProfilePhoto ? mentorProfilePhoto : sampleImage
                }
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
      )}
    </Wrapper>
  );
};

export default Services;
