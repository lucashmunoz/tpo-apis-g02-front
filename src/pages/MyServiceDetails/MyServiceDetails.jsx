import { useContext, useEffect, useState } from "react";
import UserContext from "user-context";
import { useParams } from "react-router-dom";
import CheckedStar from "assets/icons/star-filled.svg";
import PrimaryButton from "components/PrimaryButton";
import CheckSquare from "assets/icons/check-square.svg";
import CrossSquare from "assets/icons/cross-square.svg";
import {
  AcercaDe,
  AcercaDeContent,
  AcercaDeTitle,
  Comentario,
  CommentActionImg,
  CommentsContainer,
  CommentsHR,
  CommentsLabel,
  ContainerPrecioTutor,
  ContainerTitulosTutor,
  ContainerTituloServicio,
  DescripcionContainer,
  DescriptionContent,
  GuardarCambiosButtonContainer,
  NombrePrecioContainer,
  NombreTutor,
  PerfilTutor,
  PrecioTutor,
  ProfileImg,
  ProfileDescription,
  Rate,
  StarImg,
  TituloServicio,
  TitulosTutor,
  UserComment,
  UserCommentRateAndName,
  UserCommentAccions,
  UserCommentRate,
  UserCommentName,
  UserCommentText,
  UserCommentLogo,
  UserCommentLogoContainer,
  Wrapper
} from "./styles";
import axios from "axios";
import { maskPrecio, unmaskPrecio } from "helpers/helpers";

const MyServiceDetails = () => {
  const [datosPublicacion, setDatosPublicacion] = useState({
    mentor: {
      name: "Ignacio",
      email: "igcesarani@gmail.com",
      profilePhoto:
        "https://res.cloudinary.com/dybrmprcg/image/upload/v1701183447/l5wlad1zptynhwjwcupk.jpg",
      workExperience: "Trabaje como profesor de matematica y desarrollador web",
      title: "Ing Informatico"
    },
    service: {
      title: "",
      summaryDescription: "s",
      category: "",
      price: "",
      classType: "",
      nombreProfesor: "",
      hireRequest: [],
      comments: [],
      aboutMe: ""
    }
  });

  // Obtiene el serviceId desde la url
  const { id: serviceId } = useParams();

  const [loggedUser] = useContext(UserContext);

  const fetchService = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/service/getservicetoupdate/${serviceId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );

      if (response.status === 200) {
        setDatosPublicacion({
          ...response.data
        });

        /*
        setDatosPublicacion({
          ...response.data.service,
          service: {
            ...response.data.service.service,
            price: maskPrecio(response.data.service.service.price)
          }
        });
        */
      }
    } catch (e) {}
  };

  console.log(datosPublicacion);

  // Obtiene el servicio
  useEffect(() => {
    fetchService(serviceId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId]);

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
              value={datosPublicacion.service.title}
              placeholder="Título servicio"
              onChangeHandler={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  service: {
                    ...prevDatos.service,
                    title: e.target.value
                  }
                }))
              }
            />
          </ContainerTituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={datosPublicacion.mentor.profilePhoto}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>Juan</NombreTutor>
                <ContainerPrecioTutor>
                  <PrecioTutor
                    value={datosPublicacion.service.price}
                    placeholder="Precio"
                    onBlur={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        service: {
                          ...prevDatos.service,
                          price: maskPrecio(e.target.value)
                        }
                      }));
                    }}
                    onFocus={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        service: {
                          ...prevDatos.service,
                          price: unmaskPrecio(e.target.value)
                        }
                      }));
                    }}
                    onChangeHandler={(e) => {
                      if (isNaN(e.target.value)) {
                        return;
                      }
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        service: {
                          ...prevDatos.service,
                          price: e.target.value
                        }
                      }));
                    }}
                  />
                </ContainerPrecioTutor>
              </NombrePrecioContainer>
              {/*
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
                */}

              <Rate>
                <StarImg src={CheckedStar} />
                {parseFloat(4.2).toFixed(2)}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent
              value={datosPublicacion.service.summaryDescription}
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
              value={datosPublicacion.service.aboutMe}
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
            {datosPublicacion.service.comments.map((comentario) => {
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
