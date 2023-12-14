import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CheckedStar from "assets/icons/star-filled.svg";
import UserContext from "user-context";
import StarRate from "components/StarRate";
import PrimaryButton from "components/PrimaryButton";
import sampleImage from "../../assets/icons/UserSampleIcon.png";
import axios from "axios";
import {
  DescripcionContainer,
  DescriptionContent,
  Wrapper,
  TituloServicio,
  PerfilTutor,
  ProfileImgContainer,
  ProfileImg,
  ProfileDescription,
  NombrePrecioContainer,
  NombreTutor,
  PrecioTutor,
  Rate,
  StarImg,
  AcercaDe,
  AcercaDeTitle,
  AcercaDeContent,
  CommentsContainer,
  CommentsLabel,
  CommentsHR,
  Comentario,
  UserCommentLogo,
  UserComment,
  UserCommentRateAndName,
  UserCommentRate,
  UserCommentName,
  UserCommentText,
  NewCommentNameContainer,
  NewCommentRateAndName,
  NewUserNameInput,
  NewCommentText,
  SubmitCommentButtonContainer,
  SubmitCommentButton,
  ContratarContainer,
  PedirContratacion,
  MensajeAProveedor,
  InputSimpleSolicitudAlumnoContainer,
  LabelSimpleSolicitudAlumno,
  InputSimpleSolicitudAlumno,
  FrequencyRateContainer,
  Frequency,
  DropdownHorarioContacto,
  SubmitSolicitudButtonContainer,
  ErrorShow
} from "./styles";

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
  const [loggedUser] = useContext(UserContext);

  const [serviceDetail, setServiceDetail] = useState({
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
  const [nuevoComentario, setNuevoComentario] = useState({
    name: "",
    commentDate: "",
    comment: "",
    rate: 0
  });
  const [isSubmitNuevoComentarioDisabled, setIsSubmitNuevoComentarioDisabled] =
    useState(false);

  const [solicitudContratacion, setNewsolicitudContratacion] = useState({
    name: "",
    phoneNumber: "",
    comment: "",
    contactHours: "",
    email: ""
  });
  const [errorEmail, setErrorEmail] = useState("");
  const [isSubmitSolicitudDisabled, setIsSubmitSolicitudDisabled] =
    useState(false);

  const validateEmail = (email) => {
    const emailRegex = new RegExp(/^([A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4})$/i);

    if (!emailRegex.test(email)) {
      setErrorEmail("El email debe seguir el formato email@ejemplo.com");
    } else {
      setErrorEmail("");
    }

    setNewsolicitudContratacion((prevSolicitudContratacion) => ({
      ...prevSolicitudContratacion,
      email
    }));
  };

  useEffect(() => {
    const { name, comment, stars } = nuevoComentario;

    const disableSubmitNuevoComentario =
      name.length === 0 || comment.length === 0 || stars === 0;

    setIsSubmitNuevoComentarioDisabled(disableSubmitNuevoComentario);
  }, [nuevoComentario]);

  // Obtiene el serviceId desde los parametros de react-router
  const { id: serviceId } = useParams();

  useEffect(() => {
    const { name, phoneNumber, comment, contactHours, email } =
      solicitudContratacion;

    const disableSolicitarContratacion =
      name.length === 0 ||
      phoneNumber.length === 0 ||
      comment.length === 0 ||
      email.length === 0 ||
      errorEmail.length !== 0 ||
      contactHours.length === 0;

    setIsSubmitSolicitudDisabled(disableSolicitarContratacion);
  }, [solicitudContratacion, errorEmail]);

  const fetchService = async (serviceId) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/service/getoneservice/${serviceId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.data.status === 200) {
        setServiceDetail(response.data.service);
      }
    } catch (e) {}
  };

  // Obtiene el servicio
  useEffect(() => {
    fetchService(serviceId);
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

  const handleMakeNewComment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/service/addcomment",
        {
          service: { _id: serviceDetail.service._id },
          comment: {
            name: nuevoComentario.name,
            comment: nuevoComentario.comment,
            stars: nuevoComentario.stars
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.data.status === 200) {
      }
    } catch (e) {}

    setNuevoComentario({
      name: "",
      commentDate: Date.now(),
      comment: "",
      stars: 0
    });
  };

  const handleMakeNewSolicitud = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/service/sethiringrequest",
        {
          serviceId: serviceDetail.service._id,
          hireReq: {
            comment: solicitudContratacion.comment,
            name: solicitudContratacion.name,
            phoneNumber: solicitudContratacion.phoneNumber,
            email: solicitudContratacion.email,
            contactHours: solicitudContratacion.contactHours
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      if (response.data.status === 200) {
      }
    } catch (e) {}

    setNewsolicitudContratacion({
      name: "",
      phoneNumber: "",
      comment: "",
      contactHours: "",
      email: ""
    });
  };

  const comentar = async () => {
    try {
      await axios.post(
        `http://localhost:4000/api/service/addcomment`,
        {
          service: { _id: serviceId },
          comment: nuevoComentario
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    } catch (e) {}
  };

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <TituloServicio>{serviceDetail.service.title}</TituloServicio>
          <PerfilTutor>
            <ProfileImgContainer>
              <ProfileImg
                src={
                  serviceDetail?.mentor?.profilePhoto
                    ? serviceDetail.mentor.profilePhoto
                    : sampleImage
                }
                alt="foto de perfil del profesor"
              />
            </ProfileImgContainer>
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>{serviceDetail?.mentor?.name}</NombreTutor>
                <PrecioTutor>
                  ${parseFloat(serviceDetail.service.price).toFixed(2)}
                </PrecioTutor>
              </NombrePrecioContainer>
              <FrequencyRateContainer>
                <Rate>
                  <StarImg src={CheckedStar} />
                  {serviceDetail.service.rate === 0
                    ? "Sin Calificación"
                    : parseFloat(serviceDetail.service.rate).toFixed(2)}
                </Rate>

                <Frequency>{serviceDetail.service.frequency}</Frequency>
              </FrequencyRateContainer>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent>
              {serviceDetail.service.summaryDescription}
            </AcercaDeContent>
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent>{`${serviceDetail?.mentor?.title}\n${serviceDetail?.mentor?.workExperience}`}</AcercaDeContent>
          </AcercaDe>
          <CommentsContainer>
            <CommentsLabel>Comentarios de clientes pasados</CommentsLabel>
            <CommentsHR />
            {serviceDetail.service.comments.map((comentario) => {
              const { _id, name, comment, stars } = comentario;
              return (
                <Comentario key={_id}>
                  <div>
                    <UserCommentLogo>
                      {getCommentInitials(name)}
                    </UserCommentLogo>
                  </div>
                  <UserComment>
                    <UserCommentRateAndName>
                      <UserCommentRate>
                        <StarImg src={CheckedStar} />
                        {parseFloat(stars).toFixed(2)}
                      </UserCommentRate>
                      <UserCommentName>{name}</UserCommentName>
                    </UserCommentRateAndName>
                    <UserCommentText>{comment}</UserCommentText>
                  </UserComment>
                </Comentario>
              );
            })}
            <CommentsHR />
            <form onSubmit={comentar}>
              <CommentsLabel>Realizar comentario</CommentsLabel>
              <Comentario>
                <div>
                  <UserCommentLogo>
                    {getCommentInitials(nuevoComentario.name)}
                  </UserCommentLogo>
                </div>
                <UserComment>
                  <NewCommentRateAndName>
                    <UserCommentRate>
                      <StarRate
                        onChangeHandler={(newRate) =>
                          setNuevoComentario((prevCommentState) => ({
                            ...prevCommentState,
                            stars: newRate
                          }))
                        }
                      />
                    </UserCommentRate>
                    <NewCommentNameContainer>
                      <label htmlFor="nombre-usuario-comentario">Nombre</label>
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
                      isDisabled={isSubmitNuevoComentarioDisabled}
                      onClick={handleMakeNewComment}
                    >
                      Comentar
                    </SubmitCommentButton>
                  </SubmitCommentButtonContainer>
                </UserComment>
              </Comentario>
            </form>
          </CommentsContainer>
        </DescriptionContent>
      </DescripcionContainer>

      <ContratarContainer>
        <PedirContratacion>Solicitar contratación</PedirContratacion>
        <MensajeAProveedor
          maxLength="280"
          placeholder={`Escribe un mensaje para ${serviceDetail?.mentor?.name}`}
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
            required
            id="telefono-alumno-solicitud"
            placeholder="Número de teléfono"
            type="tel"
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
          <LabelSimpleSolicitudAlumno htmlFor="email-alumno-solicitud">
            Email
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="email-alumno-solicitud"
            placeholder="Email"
            value={solicitudContratacion.email}
            onChange={(e) => validateEmail(e.target.value)}
          />
        </InputSimpleSolicitudAlumnoContainer>
        <ErrorShow>{errorEmail}</ErrorShow>
        <InputSimpleSolicitudAlumnoContainer>
          <LabelSimpleSolicitudAlumno htmlFor="horario-contacto-alumno-solicitud">
            Horario de Contacto
          </LabelSimpleSolicitudAlumno>
          <DropdownHorarioContacto
            id="dropdown-horario-contacto"
            options={opcionesHorarioContacto}
            placeholderOptionLabel="Contacto"
            value={solicitudContratacion.contactHours}
            onChangeHandler={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                contactHours: e.target.value
              }))
            }
          />
        </InputSimpleSolicitudAlumnoContainer>
        <SubmitSolicitudButtonContainer>
          <PrimaryButton
            type="button"
            onClick={handleMakeNewSolicitud}
            isDisabled={isSubmitSolicitudDisabled}
          >
            Solicitar
          </PrimaryButton>
        </SubmitSolicitudButtonContainer>
      </ContratarContainer>
    </Wrapper>
  );
};

export default ServiceDetail;
