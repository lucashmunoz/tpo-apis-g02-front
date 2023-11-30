import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import AgregarServicioCard from "./AgregarServicioCard";
import styled from "styled-components";
import UserContext from "user-context";
import axios from "axios";

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
    let response;
    let services;
    console.log(loggedUser);
    try {
      response = await axios.post(
        "http://localhost:4000/api/service/getmyservices",
        {
          mentorId: loggedUser._id
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );

      console.log(response);

      if (response.data.status === 200) {
        services = response.data.services;
      }
    } catch (e) {}

    setServicios(services);
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

  const eliminarServicio = async (id) => {
    try {
      let response = await axios.delete(
        `http://localhost:4000/api/service/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );
      if (response?.status == 200) {
        console.log(response);
        navigate("/myservices");
      }
    } catch (e) {}
  };

  return (
    <Wrapper>
      <ServicesContainer>
        <AgregarServicioCard />
        {servicios ? (
          servicios.map((servicio, index) => {
            const { _id, title, summaryDescription, price, frequency, rate } =
              servicio;

            return (
              <ServiceCard
                key={_id}
                id={_id}
                profilePhoto={loggedUser.profilePhoto}
                title={title}
                summaryDescription={summaryDescription}
                price={price}
                frequency={getFrequencyLabel(frequency)}
                rate={rate}
                nombreProfesor={loggedUser.name}
                onClickHandler={() => goToServiceDetail(_id)}
                eliminarServicio={() => eliminarServicio(_id)}
              />
            );
          })
        ) : (
          <></>
        )}
      </ServicesContainer>
    </Wrapper>
  );
};

export default MisServicios;
