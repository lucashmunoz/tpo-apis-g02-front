import TextButton from "components/TextButton";
import PrimaryButton from "components/PrimaryButton";
import {
  Wrapper,
  ContainerSolicitud,
  Estado,
  EstadoLabel,
  SolicitudAlumno,
  DatosAlumno,
  NombreAlumno,
  TelefonoAlumno,
  EmailAlumno,
  HorarioContactoAlumno,
  MensajeAlumno,
  HideCard,
  Actions
} from "./styles";

const getActionButtons = ({
  _id,
  state,
  aceptarSolicitud,
  finalizarSolicitud,
  cancelarSolicitud
}) => {
  switch (state) {
    case "SOLICITADA":
      return (
        <>
          <PrimaryButton onClick={() => aceptarSolicitud(_id)}>
            ACEPTAR
          </PrimaryButton>
          <TextButton onClick={() => cancelarSolicitud(_id)}>
            CANCELAR
          </TextButton>
        </>
      );
    case "ACEPTADA":
      return (
        <>
          <PrimaryButton onClick={() => finalizarSolicitud(_id)}>
            FINALIZAR
          </PrimaryButton>
          <TextButton onClick={() => cancelarSolicitud(_id)}>
            CANCELAR
          </TextButton>
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
  cancelarSolicitud,
  state
}) => {
  const { _id, name, phoneNumber, email, contactHours, comment } = solicitud;

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
          <MensajeAlumno>{comment}</MensajeAlumno>
        </SolicitudAlumno>
        <Actions>
          {getActionButtons({
            _id,
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
