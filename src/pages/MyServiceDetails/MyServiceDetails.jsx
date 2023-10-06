import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import profilePicture1 from "../../assets/mock-imgs/ana.png";
import CheckedStar from "assets/icons/star-filled.svg";
import Input from "components/atoms/Input";
import PrimaryButton from "components/atoms/PrimaryButton";
import CheckSquare from "assets/icons/check-square.svg";
import CrossSquare from "assets/icons/cross-square.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px;
`;

const DescripcionContainer = styled.div`
  width: calc((100% / 12) * 8);
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DescriptionContent = styled.div`
  padding: 0 20px;
  width: 100%,
  float: left;
`;

const ContainerTituloServicio = styled.div`
  margin: 20px 0;
`;

const TituloServicio = styled(Input)`
  margin: 32px 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 5px;
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

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const NombreTutor = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const ContainerPrecioTutor = styled.div`
  width: 120px;
`;

const PrecioTutor = styled(Input)`
  font-size: 24px;
  font-weight: bold;
`;

const ContainerTitulosTutor = styled.div`
  margin-top: 10px;
`;

const TitulosTutor = styled(Input)`
  margin-top: 50px;
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

const AcercaDeContent = styled.textarea`
  margin-top: 12px;
  width: 100%;
  height: 150px;
  padding: 10px;
`;

const GuardarCambiosButtonContainer = styled.div`
  margin-top: 40px;
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

const UserCommentLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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

const UserCommentAccions = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const CommentActionImg = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    margin: 15px 0;
    width: 40px;
    height: 40px;
  }
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

const datosInicialesPublicacion = {
  nombrePublicacion: "Matemáticas",
  tituloTutor: "Ingeniera en UADE",
  precio: "30.00",
  sobreElServicio:
    "¿Quieres dominar las matemáticas de una vez por todas? ¡Bienvenido al Curso de Matemáticas de Excelencia, tu puerta de entrada a un mundo de conocimiento y habilidades matemáticas sobresalientes!",
  sobreMi:
    "Soy María, licenciada en Matemáticas con más de 10 años de experiencia en la enseñanza de las matemáticas. Mi pasión por esta disciplina me ha llevado a diseñar un curso completo y efectivo que te ayudará a superar tus desafíos matemáticos y a alcanzar el éxito académico."
};

const MyServiceDetails = () => {
  const [comments, setComments] = useState(comentariosCursoMatematicas);
  const [datosPublicacion, setDatosPublicacion] = useState(
    datosInicialesPublicacion
  );

  // Get the service id param from the URL.
  const { id: servideId } = useParams();

  const getCommentInitials = (nombreCompleto) => {
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

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <ContainerTituloServicio>
            <TituloServicio
              value={datosPublicacion.nombrePublicacion.toUpperCase()}
              placeholder="Titulo servicio"
              onChangeHandler={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  nombrePublicacion: e.target.value
                }))
              }
            />
          </ContainerTituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={profilePicture1}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>MARÍA</NombreTutor>
                <ContainerPrecioTutor>
                  <PrecioTutor
                    value={`$${parseFloat(datosPublicacion.precio).toFixed(2)}`}
                    placeholder="Precio"
                    onChangeHandler={(e) => {
                      if (isNaN(e.target.value.substring(1))) {
                        return;
                      }
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        precio: e.target.value.substring(1)
                      }));
                    }}
                  />
                </ContainerPrecioTutor>
              </NombrePrecioContainer>
              <ContainerTitulosTutor>
                <TitulosTutor
                  value={datosPublicacion.tituloTutor}
                  onChangeHandler={(e) =>
                    setDatosPublicacion((prevDatos) => ({
                      ...prevDatos,
                      tituloTutor: e.target.value
                    }))
                  }
                />
              </ContainerTitulosTutor>
              <Rate>
                <StarImg src={CheckedStar} />
                {parseFloat(4.2).toFixed(2)}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent
              value={datosPublicacion.sobreElServicio}
              onChange={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  sobreElServicio: e.target.value
                }))
              }
            />
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent
              value={datosPublicacion.sobreMi}
              onChange={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  sobreMi: e.target.value
                }))
              }
            />
          </AcercaDe>

          <GuardarCambiosButtonContainer>
            <PrimaryButton>Guardar Cambios</PrimaryButton>
          </GuardarCambiosButtonContainer>
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
                      {getCommentInitials(name)}
                    </UserCommentLogo>
                    <UserCommentAccions>
                      <button>
                        <CommentActionImg
                          src={CheckSquare}
                          alt="Aceptar Comentario"
                        />
                      </button>
                      <button>
                        <CommentActionImg
                          src={CrossSquare}
                          alt="Rechazar Comentario"
                        />
                      </button>
                    </UserCommentAccions>
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
          </CommentsContainer>
        </DescriptionContent>
      </DescripcionContainer>
    </Wrapper>
  );
};

export default MyServiceDetails;
