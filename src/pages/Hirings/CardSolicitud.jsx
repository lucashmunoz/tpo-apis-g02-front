import Button from "components/atoms/Button";
import PrimaryButton from "components/atoms/PrimaryButton";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerSolicitud = styled.div`
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

const Estado = styled.div`
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

const EstadoLabel = styled.label`
  font-weight: bold;
`;

const SolicitudAlumno = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const DatosAlumno = styled.div`
  height: 100%;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

const NombreAlumno = styled.h3`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

const TelefonoAlumno = styled.p`
  font-size: 16x;
  font-style: italic;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

const EmailAlumno = styled.p`
  font-size: 16x;
  font-style: italic;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

const HorarioContactoAlumno = styled.p`
  font-size: 16x;

  @media (max-width: 920px) {
    margin-top: 10px;
  }
`;

const MensajeAlumno = styled.div`
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

const HideCard = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
`;

const Actions = styled.div`
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

const getActionButtons = ({
  id,
  state,
  aceptarSolicitud,
  finalizarSolicitud,
  cancelarSolicitud
}) => {
  switch (state) {
    case "SOLICITADA":
      return (
        <>
          <PrimaryButton onClick={() => aceptarSolicitud(id)}>
            ACEPTAR
          </PrimaryButton>
          <Button onClick={() => cancelarSolicitud(id)}>CANCELAR</Button>
        </>
      );
    case "ACEPTADA":
      return (
        <>
          <PrimaryButton onClick={() => finalizarSolicitud(id)}>
            FINALIZAR
          </PrimaryButton>
          <Button onClick={() => cancelarSolicitud(id)}>CANCELAR</Button>
        </>
      );
    case "FINALIZADA":
      return null;
    case "CANCELADA":
      return null;
    default:
      return null;
  }
};

const CardSolicitud = ({
  solicitud,
  aceptarSolicitud,
  finalizarSolicitud,
  cancelarSolicitud
}) => {
  const { id, name, phoneNumber, email, contactHours, message, state } =
    solicitud;

  const hideCard = () => state === "FINALIZADA" || state === "CANCELADA";

  return (
    <Wrapper>
      <ContainerSolicitud>
        {hideCard() && <HideCard />}
        <Estado>
          <EstadoLabel>{state}</EstadoLabel>
        </Estado>
        <SolicitudAlumno>
          <DatosAlumno>
            <NombreAlumno>{name}</NombreAlumno>
            <TelefonoAlumno>{phoneNumber}</TelefonoAlumno>
            <EmailAlumno>{email}</EmailAlumno>
            <HorarioContactoAlumno>
              Horario de contacto: {contactHours}
            </HorarioContactoAlumno>
          </DatosAlumno>
          <MensajeAlumno>{message}</MensajeAlumno>
        </SolicitudAlumno>
        <Actions>
          {getActionButtons({
            id,
            state,
            aceptarSolicitud,
            finalizarSolicitud,
            cancelarSolicitud
          })}
        </Actions>
      </ContainerSolicitud>
    </Wrapper>
  );
};

export default CardSolicitud;
