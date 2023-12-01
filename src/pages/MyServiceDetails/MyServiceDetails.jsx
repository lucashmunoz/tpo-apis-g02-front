import { useContext, useEffect, useState } from "react";
import UserContext from "user-context";
import { useNavigate, useParams } from "react-router-dom";
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
  ControlContainer,
  OpcionDropdown,
  ContainerPrecioTutor,
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
  const navigate = useNavigate();

  const [datosPublicacion, setDatosPublicacion] = useState({
    title: "",
    summaryDescription: "s",
    category: "",
    price: "",
    classType: "",
    nombreProfesor: "",
    hireRequest: [],
    comments: [],
    aboutMe: ""
  });

  const [opcionesCategorias, setOpcionesCategorias] = useState([
    {
      label: "Materias Escolares",
      value: "ESCOLARES"
    },
    {
      label: "Idiomas",
      value: "LANGUAGE"
    },
    {
      label: "Música",
      value: "MUSIC"
    },
    {
      label: "Multimedia",
      value: "MULTIMEDIA"
    },
    {
      label: "Diseño",
      value: "DISENO"
    },
    {
      label: "Programación",
      value: "PROGRAMMING"
    },
    {
      label: "Deportes",
      value: "DEPORTES"
    },
    {
      label: "Cocina",
      value: "COCINA"
    }
  ]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([
    {
      label: "Individual",
      value: "INDIVIDUAL"
    },
    {
      label: "Grupal",
      value: "GRUPAL"
    }
  ]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([
    {
      label: "Única",
      value: "UNICA"
    },
    {
      label: "Semanal",
      value: "SEMANAL"
    },
    {
      label: "Mensual",
      value: "MENSUAL"
    }
  ]);

  // Obtiene el serviceId desde la url
  const { id: serviceId } = useParams();

  const [loggedUser] = useContext(UserContext);

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await fetch("mocks/filtervalues.json");
      const filtersValues = await response.json();

      setOpcionesCategorias(filtersValues.categories);
      setOpcionesTipoClase(filtersValues.classTypes);
      setOpcionesFrecuencias(filtersValues.frequencies);
    };

    fetchFilters();
  }, []);

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
          ...response.data.service,
          price: maskPrecio(response.data.service.price)
        });
      }
    } catch (e) {}
  };

  // Obtiene el servicio
  useEffect(() => {
    fetchService(serviceId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceId]);

  const handleGuardarCambios = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:4000/api/service/updateservice`,
        {
          service: {
            _id: datosPublicacion._id,
            title: datosPublicacion.title,
            summaryDescription: datosPublicacion.summaryDescription,
            category: datosPublicacion.category,
            frequency: datosPublicacion.frequency,
            classType: datosPublicacion.classType,
            aboutMe: datosPublicacion.aboutMe,
            price: unmaskPrecio(datosPublicacion.price)
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );

      navigate("/myservices");
    } catch (e) {}

    await fetchService();
  };

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

  const changeCommentStatus = async (commentId, nuevoEstado) => {
    try {
      await axios.post(
        `http://localhost:4000/api/service/changecommentstatus`,
        {
          serviceId: datosPublicacion._id,
          commentId: commentId,
          commentStatus: nuevoEstado
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );
    } catch (e) {}

    await fetchService();
  };

  const handleAceptarComentario = (id) => {
    console.log({ id });
    changeCommentStatus(id, 1);
  };

  const handleRechazarComentario = (id) => {
    changeCommentStatus(id, 2);
  };

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <ContainerTituloServicio>
            <TituloServicio
              value={datosPublicacion.title}
              placeholder="Título servicio"
              onChangeHandler={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  title: e.target.value
                }))
              }
            />
          </ContainerTituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={loggedUser.profilePhoto}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>{loggedUser.name}</NombreTutor>
                <ContainerPrecioTutor>
                  <PrecioTutor
                    value={datosPublicacion.price}
                    placeholder="Precio"
                    onBlur={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        price: maskPrecio(e.target.value)
                      }));
                    }}
                    onFocus={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        price: unmaskPrecio(e.target.value)
                      }));
                    }}
                    onChangeHandler={(e) => {
                      if (isNaN(e.target.value)) {
                        return;
                      }
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        price: e.target.value
                      }));
                    }}
                  />
                </ContainerPrecioTutor>
              </NombrePrecioContainer>

              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-categorias"
                  labelText="Categoría"
                  options={opcionesCategorias}
                  placeholderOptionLabel="Categoría"
                  onChangeHandler={(e) =>
                    setDatosPublicacion((prevDatos) => ({
                      ...prevDatos,
                      category: e.target.value
                    }))
                  }
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-tipo-clase"
                  labelText="Tipo de Clase"
                  options={opcionesTipoClase}
                  placeholderOptionLabel="Tipo de Clase"
                  onChangeHandler={(e) =>
                    setDatosPublicacion((prevDatos) => ({
                      ...prevDatos,
                      classType: e.target.value
                    }))
                  }
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-frecuencias"
                  labelText="Frecuencia"
                  options={opcionesFrecuencias}
                  placeholderOptionLabel="Frecuencia"
                  onChangeHandler={(e) =>
                    setDatosPublicacion((prevDatos) => ({
                      ...prevDatos,
                      frequency: e.target.value
                    }))
                  }
                />
              </ControlContainer>

              <Rate>
                <StarImg src={CheckedStar} />
                {parseFloat(datosPublicacion.rate) >= 1 &&
                parseFloat(datosPublicacion.rate <= 5)
                  ? parseFloat(datosPublicacion.rate)
                  : "Sin calificación"}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent
              value={datosPublicacion.summaryDescription}
              onChange={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  summaryDescription: e.target.value
                }))
              }
            />
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent
              value={datosPublicacion.aboutMe}
              onChange={(e) =>
                setDatosPublicacion((prevDatos) => ({
                  ...prevDatos,
                  aboutMe: e.target.value
                }))
              }
            />
          </AcercaDe>

          <GuardarCambiosButtonContainer>
            <PrimaryButton type="button" onClick={handleGuardarCambios}>
              Guardar Cambios
            </PrimaryButton>
          </GuardarCambiosButtonContainer>
          <CommentsContainer>
            <CommentsLabel>Comentarios de clientes pasados</CommentsLabel>
            <CommentsHR />
            {datosPublicacion.comments.map((comentario) => {
              const {
                _id,
                name,
                comment: commentText,
                rate: commentRate
              } = comentario;
              return (
                <Comentario key={_id}>
                  <UserCommentLogoContainer>
                    <UserCommentLogo>
                      {getCommentInitials(name)}
                    </UserCommentLogo>
                    <UserCommentAccions>
                      <button
                        onClick={() => handleAceptarComentario(_id)}
                        type="button"
                      >
                        <CommentActionImg
                          src={CheckSquare}
                          alt="Aceptar Comentario"
                        />
                      </button>
                      <button
                        onClick={() => handleRechazarComentario(_id)}
                        type="button"
                      >
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
