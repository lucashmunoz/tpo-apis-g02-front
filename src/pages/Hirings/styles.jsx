import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerSolicitud = styled.div`
  width: 880px;
  height: 150px;
  background-color: #f3f4f6;
  margin: 20px 0;
  position: relative;

  display: flex;
  flex-direction: row;

  @media (max-width: 920px) {
    flex-direction: column;
    width: 100%;
    margin: 20px 10px;
    height: 100%;
  }
`;

export const Estado = styled.div`
  width: 130px;
  height: 130px;
  background-color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const EstadoLabel = styled.label`
  font-weight: bold;
`;

export const SolicitudAlumno = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const DatosAlumno = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const NombreAlumno = styled.h3`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

export const TelefonoAlumno = styled.p`
  font-size: 16x;
  font-style: italic;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

export const EmailAlumno = styled.p`
  font-size: 16x;
  font-style: italic;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

export const HorarioContactoAlumno = styled.p`
  font-size: 16x;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

export const MensajeAlumno = styled.div`
  width: 280px;
  height: 100%;
  background-color: white;
  margin-left: 10px;
  padding: 10px;
  font-style: italic;

  @media (max-width: 920px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const HideCard = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 140px;

  @media (max-width: 920px) {
    width: 100%;
    height: 100px;
    margin: 0;
    padding: 10px;
  }
`;

export const SinContratacionesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const SinContratacionesText = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;
