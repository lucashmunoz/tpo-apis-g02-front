import { useParams } from "react-router-dom";
import styled from "styled-components";
import profilePicture1 from "assets/mock-imgs/profile-picture-1.png";
import CheckedStar from "assets/icons/star-filled.svg";
import { useState } from "react";
import StarRate from "components/atoms/StarRate";
import Button from "components/atoms/Button";
import Dropdown from "components/atoms/Dropdown";

const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DescripcionContainer = styled.div`
  width: calc((100% / 12) * 8);
  background-color: #f3f4f6;
  float: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescriptionContent = styled.div`
  padding: 0 20px;
  width: 100%,
  float: left;
`;

const TituloServicio = styled.h3`
  padding: 32px 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

const PerfilTutor = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
`;

const ProfileDescription = styled.div`
  padding-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const NombrePrecioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NombreTutor = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const PrecioTutor = styled.label`
  font-size: 24px;
  font-weight: bold;
`;

const TitulosTutor = styled.label`
  font-size: 20px;
`;

const Rate = styled.div`
  margin-top: auto;
  display: flex;
  color: black;
`;

const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

const AcercaDe = styled.div`
  margin-top: 40px;
`;

const AcercaDeTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const AcercaDeContent = styled.p`
  margin-top: 12px;
`;

const CommentsContainer = styled.div`
  margin-top: 40px;
`;

const CommentsLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const CommentsHR = styled.hr`
  width: 100%;
  height: 1px;
  color: grey;
  margin: 20px 20px 20px 0;
`;

const Comentario = styled.div`
  margin: 20px 0;
  display: flex;
`;

const UserCommentLogoContainer = styled.div``;

const UserCommentLogo = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const UserComment = styled.div`
  margin-left: 20px;
  width: 100%;
`;

const UserCommentRateAndName = styled.div`
  display: flex;
  align-items: center;
`;

const UserCommentRate = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

const UserCommentName = styled.label`
  margin-left: 15px;
  font-weight: bold;
`;

const UserCommentText = styled.p`
  margin-top: 8px;
`;

const NewCommentNameContainer = styled.div`
  display: flex;
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewCommentRateAndName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewUserNameInput = styled.input`
  margin-left: 10px;
  width: 100%;
  padding-left: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const NewCommentText = styled.textarea`
  margin-top: 8px;
  height: 100px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SubmitCommentButtonContainer = styled.div`
  float: right;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SubmitCommentButton = styled(Button)`
  float: right;
`;

// derecha
const ContratarContainer = styled.div`
  width: calc((100% / 12) * 4);
  background-color: #f3f4f6;
  float: left;
  margin-left: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-left: 0;
  }
`;

const PedirContratacion = styled.h3`
  font-size: 24px;
  font-weight: bold;
  padding: 32px 0;
  text-align: center;
`;

const MensajeAProveedor = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

const InputSimpleSolicitudAlumnoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const LabelSimpleSolicitudAlumno = styled.label`
  width: 100px;
  display: inline-block;
`;

const InputSimpleSolicitudAlumno = styled.input`
  padding-left: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

const DropdownHorarioContacto = styled(Dropdown)`
  width: 100%;
`;

const SubmitSolicitudButtonContainer = styled.div`
  margin-top: 10px;
`;

const SubmitSolicitudButton = styled(Button)``;

const comentariosCursoMatematicas = [
  {
    id: 0,
    name: "María Pérez",
    commentDate: "2023-10-04",
    comment:
      "Este curso ha sido una experiencia increíble. El profesor es muy claro en sus explicaciones, y las lecciones personalizadas hicieron que las matemáticas fueran mucho más comprensibles. ¡Le doy 5 estrellas!",
    rate: 5
  },
  {
    id: 1,
    name: "Juan López",
    commentDate: "2023-10-03",
    comment:
      "Como estudiante universitario, este curso me ayudó a superar mis miedos a las matemáticas. Las prácticas constantes realmente fortalecieron mis habilidades. Lo recomiendo encarecidamente. Puntuación: 4",
    rate: 4
  },
  {
    id: 2,
    name: "Ana Gómez",
    commentDate: "2023-10-02",
    comment:
      "El profesor es muy paciente y se toma el tiempo para explicar cada concepto. Me siento mucho más segura con las matemáticas ahora. Le doy un sólido 5. ¡Gracias!",
    rate: 5
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    commentDate: "2023-10-01",
    comment:
      "El material del curso es excelente y está bien estructurado. Sin embargo, me hubiera gustado más interacción en vivo. Le doy un 4.",
    rate: 4
  },
  {
    id: 4,
    name: "Laura Martínez",
    commentDate: "2023-09-30",
    comment:
      "Este curso ha sido un salvavidas para mí. Las matemáticas siempre fueron mi debilidad, pero ahora me siento mucho más confiada. Le doy 5 estrellas sin dudarlo.",
    rate: 5
  }
];

const opcionesHorarioContacto = [
  {
    label: "Mañana",
    value: "MANANA"
  },
  {
    label: "Tarde",
    value: "TARDE"
  },
  {
    label: "Noche",
    value: "NOCHE"
  }
];

const ServiceDetail = () => {
  const [comments, setComments] = useState(comentariosCursoMatematicas);
  const [nuevoComentario, setNuevoComentario] = useState({
    name: "",
    commentDate: "",
    comment: "",
    rate: 0
  });

  const [solicitudContratacion, setNewsolicitudContratacion] = useState({
    name: "",
    phoneNumber: "",
    comment: "",
    contactHours: ""
  });

  // Get the service id param from the URL.
  const { id: servideId } = useParams();

  const getCommentNmeInitials = (nombreCompleto) => {
    const arrNombreCompleto = nombreCompleto.trim().split(" ");

    if (arrNombreCompleto.length === 0) {
      return "";
    }

    if (arrNombreCompleto.length === 1) {
      return arrNombreCompleto[0][0];
    }

    return `${arrNombreCompleto[0][0]}${
      arrNombreCompleto[arrNombreCompleto.length - 1][0]
    }`;
  };

  const handleMakeNewComment = () => {
    // Llamar a la api de publiacion de nuevo comentario para el id de servicio

    console.log(
      "Nuevo comentario enviado y en espera de revision!",
      nuevoComentario
    );

    setNuevoComentario({
      name: "",
      commentDate: "",
      comment: "",
      rate: 0
    });
  };

  const handleMakeNewSolicitud = () => {
    // Llamar a la api de solicitud de nueva contratacion

    console.log(
      "Nuevo solicitud enviada y en espera de aceptación!",
      nuevoComentario
    );

    setNewsolicitudContratacion({
      name: "",
      phoneNumber: "",
      comment: "",
      contactHours: ""
    });
  };

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <TituloServicio>MATEMATICAS</TituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={profilePicture1}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>MARÍA</NombreTutor>
                <PrecioTutor>$30.00</PrecioTutor>
              </NombrePrecioContainer>
              <TitulosTutor>Ingeniera en UADE</TitulosTutor>
              <Rate>
                <StarImg src={CheckedStar} />
                {parseFloat(2.5).toFixed(2)}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent>
              ¿Quieres dominar las matemáticas de una vez por todas? ¡Bienvenido
              al Curso de Matemáticas de Excelencia, tu puerta de entrada a un
              mundo de conocimiento y habilidades matemáticas sobresalientes!
            </AcercaDeContent>
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent>
              Soy María, licenciada en Matemáticas con más de 10 años de
              experiencia en la enseñanza de las matemáticas. Mi pasión por esta
              disciplina me ha llevado a diseñar un curso completo y efectivo
              que te ayudará a superar tus desafíos matemáticos y a alcanzar el
              éxito académico.
            </AcercaDeContent>
          </AcercaDe>
          <CommentsContainer>
            <CommentsLabel>Comentarios de clientes pasados</CommentsLabel>
            <CommentsHR />
            {comments.map((comentario) => {
              const {
                id,
                name,
                comment: commentText,
                rate: commentRate
              } = comentario;
              return (
                <Comentario key={id}>
                  <UserCommentLogoContainer>
                    <UserCommentLogo>
                      {getCommentNmeInitials(name)}
                    </UserCommentLogo>
                  </UserCommentLogoContainer>
                  <UserComment>
                    <UserCommentRateAndName>
                      <UserCommentRate>
                        <StarImg src={CheckedStar} />
                        {parseFloat(commentRate).toFixed(2)}
                      </UserCommentRate>
                      <UserCommentName>{name}</UserCommentName>
                    </UserCommentRateAndName>
                    <UserCommentText>{commentText}</UserCommentText>
                  </UserComment>
                </Comentario>
              );
            })}
            <CommentsHR />
            <CommentsLabel>Realizar comentario</CommentsLabel>
            <Comentario>
              <UserCommentLogoContainer>
                <UserCommentLogo>
                  {getCommentNmeInitials(nuevoComentario.name)}
                </UserCommentLogo>
              </UserCommentLogoContainer>
              <UserComment>
                <NewCommentRateAndName>
                  <UserCommentRate>
                    <StarRate
                      onChangeHandler={(newRate) =>
                        setNuevoComentario((prevCommentState) => ({
                          ...prevCommentState,
                          rate: newRate
                        }))
                      }
                    />
                  </UserCommentRate>
                  <NewCommentNameContainer>
                    <label htmlFor="nombre-usuario-comentario">Nobre</label>
                    <NewUserNameInput
                      id="nombre-usuario-comentario"
                      placeholder="Nombre"
                      value={nuevoComentario.name}
                      onChange={(e) =>
                        setNuevoComentario((prevCommentState) => ({
                          ...prevCommentState,
                          name: e.target.value
                        }))
                      }
                    />
                  </NewCommentNameContainer>
                </NewCommentRateAndName>
                <NewCommentText
                  maxLength="280"
                  placeholder="Comenta que te pareció el curso!"
                  value={nuevoComentario.comment}
                  onChange={(e) =>
                    setNuevoComentario((prevCommentState) => ({
                      ...prevCommentState,
                      comment: e.target.value
                    }))
                  }
                />
                <SubmitCommentButtonContainer>
                  <SubmitCommentButton
                    buttonType="primary"
                    onClick={handleMakeNewComment}
                  >
                    Comentar
                  </SubmitCommentButton>
                </SubmitCommentButtonContainer>
              </UserComment>
            </Comentario>
          </CommentsContainer>
        </DescriptionContent>
      </DescripcionContainer>

      <ContratarContainer>
        <PedirContratacion>Solicitar contratacion</PedirContratacion>
        <MensajeAProveedor
          maxLength="280"
          placeholder={`Escribe un mensaje para ${"Maria"}`}
          value={solicitudContratacion.comment}
          onChange={(e) =>
            setNewsolicitudContratacion((prevSolicitudContratacion) => ({
              ...prevSolicitudContratacion,
              comment: e.target.value
            }))
          }
        />
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="nombre-alumno-solicitud">
            Nombre
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="nombre-alumno-solicitud"
            placeholder="Nombre"
            value={solicitudContratacion.name}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                name: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="telefono-alumno-solicitud">
            Tel:
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="telefono-alumno-solicitud"
            placeholder="Número de teléfono"
            type=""
            value={solicitudContratacion.phoneNumber}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                phoneNumber: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="horario-contacto-alumno-solicitud">
            Horario de Contacto
          </LabelSimpleSolicitudAlumno>
          <DropdownHorarioContacto
            id="dropdown-horario-contacto"
            options={opcionesHorarioContacto}
            placeholderLabel="Categoría"
            onChangeHandler={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                contactHours: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <SubmitSolicitudButtonContainer>
          <SubmitSolicitudButton
            buttonType="primary"
            onClick={handleMakeNewSolicitud}
            disabled
          >
            Solicitar
          </SubmitSolicitudButton>
        </SubmitSolicitudButtonContainer>
      </ContratarContainer>
    </Wrapper>
  );
};

export default ServiceDetail;
