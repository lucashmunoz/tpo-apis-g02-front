import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import profilePicture1 from "assets/mock-imgs/profile-picture-1.png";
import CheckedStar from "assets/icons/star-filled.svg";
import StarRate from "components/atoms/StarRate";
import PrimaryButton from "components/atoms/PrimaryButton";
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

const RealizarNuevoComentarioForm = styled.form``;

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

const SubmitCommentButton = styled(PrimaryButton)`
  float: right;
`;

const ContratarContainer = styled.form`
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

const SubmitSolicitudButton = styled(PrimaryButton)``;

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

const detallesServicios = [
  {
    id: 0,
    titulo: "Matemáticas",
    tutor: "María",
    establecimiento:
      "Facultad de Ciencias Exactas, Universidad Nacional de Buenos Aires",
    precio: "30",
    sobre_el_servicio:
      "Aprende matemáticas de forma efectiva con nuestras clases personalizadas. Nuestro enfoque se basa en comprender los conceptos clave y resolver problemas prácticos. Ofrecemos ejercicios prácticos, tutoriales en video y sesiones interactivas para mejorar tus habilidades. ¡Desarrolla tu confianza en las matemáticas con nosotros!",
    sobre_mi:
      "Soy María, el tutor de este curso. Tengo una amplia experiencia en la enseñanza de matemáticas y estoy comprometida en ayudarte a alcanzar tus metas académicas. Mi pasión por las matemáticas me lleva a explicar los conceptos de una manera clara y accesible para todos los estudiantes.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "2.8"
  },
  {
    id: 1,
    titulo: "Inglés",
    tutor: "Juan",
    establecimiento: "Facultad de Lenguas, Universidad Nacional de Córdoba",
    precio: "25",
    sobre_el_servicio:
      "Mejora tus habilidades en inglés con nuestras clases personalizadas. Nuestro enfoque se centra en la conversación, la gramática y la comprensión auditiva. Ofrecemos material auténtico y situaciones de la vida real para que te sientas cómodo hablando en inglés en cualquier situación. ¡Aprende de manera divertida y efectiva!",
    sobre_mi:
      "Soy Juan, el tutor de este curso. Mi amor por los idiomas y mi experiencia en la enseñanza me han llevado a ayudar a numerosos estudiantes a alcanzar fluidez en inglés. Estoy comprometido en hacer que tu aprendizaje sea interesante y práctico.",
    frequency: "MENSUAL",
    classType: "INDIVIDUAL",
    rate: "4.2"
  },
  {
    id: 2,
    titulo: "Programación",
    tutor: "Laura",
    establecimiento:
      "Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires",
    precio: "40",
    sobre_el_servicio:
      "Aprende a programar desde cero o mejora tus habilidades existentes en programación. Nuestro curso abarca los conceptos fundamentales de la programación y te lleva a través de proyectos prácticos. Te sumergirás en el mundo de la codificación y adquirirás las habilidades necesarias para crear tus propias aplicaciones.",
    sobre_mi:
      "Soy Laura, la tutora de este curso. Con una sólida formación en informática y años de experiencia en desarrollo de software, estoy aquí para guiarte en tu viaje de aprendizaje de programación. Mi objetivo es que te sientas confiado en tu capacidad para programar y resolver problemas.",
    frequency: "SEMANAL",
    classType: "GRUPAL",
    rate: "3.9"
  },
  {
    id: 3,
    titulo: "Historia",
    tutor: "Carlos",
    establecimiento:
      "Facultad de Filosofía y Letras, Universidad Nacional de Buenos Aires",
    precio: "35",
    sobre_el_servicio:
      "Explora el pasado a través de fascinantes clases de historia. Nuestro curso te llevará a través de diferentes períodos históricos y eventos significativos. Aprenderás a analizar fuentes históricas y a comprender mejor el mundo que te rodea.",
    sobre_mi:
      "Soy Carlos, el tutor de este curso. Mi pasión por la historia me motiva a compartir conocimientos y desafiar la percepción convencional de los eventos pasados. Juntos, exploraremos los secretos de la historia.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.5"
  },
  {
    id: 4,
    titulo: "Biología",
    tutor: "Ana",
    establecimiento:
      "Facultad de Ciencias Biológicas, Universidad Nacional de La Plata",
    precio: "30",
    sobre_el_servicio:
      "Descubre el mundo de las ciencias con nuestras clases especializadas en biología. Aprende sobre la diversidad de la vida, la genética y la ecología. Te sumergirás en el fascinante reino natural y comprenderás mejor nuestro entorno.",
    sobre_mi:
      "Soy Ana, la tutora de este curso. Con una formación sólida en biología y una pasión por la naturaleza, estoy aquí para compartir contigo mi conocimiento y ayudarte a apreciar la belleza y la complejidad de la vida en la Tierra.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "3.7"
  },
  {
    id: 5,
    titulo: "Photoshop",
    tutor: "Luis",
    establecimiento: "Facultad de Artes, Universidad Nacional de Rosario",
    precio: "45",
    sobre_el_servicio:
      "Desarrolla tu creatividad a través de nuestras clases de Photoshop. Aprende las técnicas de edición de imágenes, diseño gráfico y manipulación de fotos. Te convertirás en un experto en la herramienta preferida de los profesionales del diseño.",
    sobre_mi:
      "Soy Luis, el tutor de este curso. Mi pasión por el diseño gráfico y mi experiencia en Photoshop me han permitido trabajar en proyectos emocionantes. Estoy aquí para transmitirte mis conocimientos y ayudarte a desarrollar tus habilidades creativas.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.8"
  },
  {
    id: 6,
    titulo: "Cocina hogareña",
    tutor: "Patricia",
    establecimiento: "Facultad de Gastronomía, Universidad Nacional de Tucumán",
    precio: "35",
    sobre_el_servicio:
      "Comprende los principios económicos con nuestras clases especializadas en cocina hogareña. Aprenderás a planificar comidas, administrar tu presupuesto y cocinar platos deliciosos en casa. ¡Eleva tus habilidades culinarias!",
    sobre_mi:
      "Soy Patricia, la tutora de este curso. Con una amplia experiencia en el mundo de la gastronomía, estoy aquí para compartir contigo mis secretos de cocina y ayudarte a disfrutar de la cocina en casa.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "3.2"
  },
  {
    id: 7,
    titulo: "Física",
    tutor: "José",
    establecimiento:
      "Facultad de Ciencias Exactas y Naturales, Universidad Nacional de Córdoba",
    precio: "40",
    sobre_el_servicio:
      "Explora las leyes fundamentales del universo con nuestras clases de física. Aprende sobre la mecánica, la electricidad, la termodinámica y la relatividad. Te adentrarás en el fascinante mundo de la física y sus aplicaciones en la vida cotidiana.",
    sobre_mi:
      "Soy José, el tutor de este curso. Mi pasión por la física me lleva a explicar conceptos complejos de manera accesible y emocionante. Estoy aquí para inspirarte y ayudarte a comprender el mundo que nos rodea.",
    frequency: "UNICA",
    classType: "INDIVIDUAL",
    rate: "4.1"
  },
  {
    id: 8,
    titulo: "Química",
    tutor: "Carmen",
    establecimiento:
      "Facultad de Ciencias Químicas, Universidad Nacional de San Juan",
    precio: "35",
    sobre_el_servicio:
      "Sumérgete en el mundo de la química con nuestras clases especializadas. Aprende sobre la estructura de la materia, las reacciones químicas y la química orgánica. Descubre cómo la química impacta en nuestra vida diaria.",
    sobre_mi:
      "Soy Carmen, la tutora de este curso. Con una sólida formación en química y una pasión por la ciencia, estoy aquí para compartir contigo los secretos del mundo de la química y ayudarte a comprender sus aplicaciones en el mundo real.",
    frequency: "UNICA",
    classType: "GRUPAL",
    rate: "3.5"
  },
  {
    id: 9,
    titulo: "Piano",
    tutor: "Francisco",
    establecimiento:
      "Facultad de Artes Musicales, Universidad Nacional de Córdoba",
    precio: "45",
    sobre_el_servicio:
      "Explora el piano y desarrolla tus habilidades musicales con nuestras clases especializadas. Aprenderás técnicas de piano, teoría musical y podrás tocar tus piezas favoritas. ¡Desarrolla tu pasión por la música!",
    sobre_mi:
      "Soy Francisco, el tutor de este curso. Mi amor por la música y mi experiencia como pianista me han llevado a enseñar a estudiantes de todas las edades. Estoy aquí para inspirarte y ayudarte a alcanzar tus objetivos musicales.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "4.3"
  },
  {
    id: 10,
    titulo: "Geografía",
    tutor: "Sandra",
    establecimiento:
      "Facultad de Filosofía y Letras, Universidad Nacional de Buenos Aires",
    precio: "30",
    sobre_el_servicio:
      "Descubre el mundo a través de clases de geografía. Explorarás paisajes, culturas y procesos geográficos. Aprenderás a analizar mapas, entender la geopolítica y apreciar la diversidad del planeta.",
    sobre_mi:
      "Soy Sandra, la tutora de este curso. Mi pasión por la geografía me motiva a compartir conocimientos sobre nuestro mundo. Juntos, exploraremos las maravillas de la Tierra y comprenderemos su importancia en la sociedad actual.",
    frequency: "SEMANAL",
    classType: "INDIVIDUAL",
    rate: "3.9"
  },
  {
    id: 11,
    titulo: "Pescados y Mariscos",
    tutor: "Manuel",
    establecimiento:
      "Facultad de Gastronomía, Universidad Nacional de Mar del Plata",
    precio: "35",
    sobre_el_servicio:
      "Aprende sobre la vida y la naturaleza con clases de biología marina enfocadas en pescados y mariscos. Descubrirás la diversidad de especies, métodos de pesca sostenible y técnicas de preparación culinaria.",
    sobre_mi:
      "Soy Manuel, el tutor de este curso. Mi pasión por el mundo marino y la gastronomía se unen en estas clases. Estoy aquí para compartir contigo mi conocimiento y aprecio por los productos del mar.",
    frequency: "MENSUAL",
    classType: "GRUPAL",
    rate: "4.7"
  }
];

const ServiceDetail = () => {
  const [comments, setComments] = useState(comentariosCursoMatematicas);
  const [serviceDetail, setServiceDetail] = useState({});
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
  const [isSubmitSolicitudDisabled, setIsSubmitSolicitudDisabled] =
    useState(false);

  useEffect(() => {
    const { name, comment, rate } = nuevoComentario;

    const disableSubmitNuevoComentario =
      name.length === 0 || comment.length === 0 || rate === 0;

    setIsSubmitNuevoComentarioDisabled(disableSubmitNuevoComentario);
  }, [nuevoComentario]);

  // Get the service id param from the URL.
  const { id: serviceId } = useParams();

  useEffect(() => {
    const { name, phoneNumber, comment, contactHours, email } =
      solicitudContratacion;

    const disableSolicitarContratacion =
      name.length === 0 ||
      phoneNumber.length === 0 ||
      comment.length === 0 ||
      email.length === 0 ||
      contactHours.length === 0;

    setIsSubmitSolicitudDisabled(disableSolicitarContratacion);
  }, [solicitudContratacion]);

  const fetchServices = async () => {
    // const response = await fetch("servicesdetails.json");
    // const { servicesdetail } = await response.json();

    setServiceDetail(
      detallesServicios.find((s) => s.id.toString() === serviceId)
    );
  };

  useEffect(() => {
    fetchServices();
  }, []);

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

  const handleMakeNewComment = (e) => {
    e.preventDefault();

    // Llamar a la api de publiacion de nuevo comentario para el id de servicio
    console.log(
      "Nuevo comentario enviado y en espera de revision!",
      nuevoComentario
    );

    setNuevoComentario({
      name: "",
      commentDate: Date.now(),
      comment: "",
      rate: 0
    });
  };

  const handleMakeNewSolicitud = (e) => {
    e.preventDefault();

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

  console.log(serviceDetail);

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <TituloServicio>{serviceDetail.titulo}</TituloServicio>
          <PerfilTutor>
            <ProfileImg
              src={profilePicture1}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>{serviceDetail.tutor}</NombreTutor>
                <PrecioTutor>${serviceDetail.precio}</PrecioTutor>
              </NombrePrecioContainer>
              <TitulosTutor>{serviceDetail.establecimiento}</TitulosTutor>
              <Rate>
                <StarImg src={CheckedStar} />
                {serviceDetail.rate}
              </Rate>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent>{serviceDetail.soble_el_servicio}</AcercaDeContent>
          </AcercaDe>
          <AcercaDe>
            <AcercaDeTitle>Sobre mí</AcercaDeTitle>
            <AcercaDeContent>{serviceDetail.sobre_mi}</AcercaDeContent>
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
                      {getCommentInitials(name)}
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
            <RealizarNuevoComentarioForm onSubmit={handleMakeNewComment}>
              <CommentsLabel>Realizar comentario</CommentsLabel>
              <Comentario>
                <UserCommentLogoContainer>
                  <UserCommentLogo>
                    {getCommentInitials(nuevoComentario.name)}
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
                      isDisabled={isSubmitNuevoComentarioDisabled}
                    >
                      Comentar
                    </SubmitCommentButton>
                  </SubmitCommentButtonContainer>
                </UserComment>
              </Comentario>
            </RealizarNuevoComentarioForm>
          </CommentsContainer>
        </DescriptionContent>
      </DescripcionContainer>

      <ContratarContainer onSubmit={handleMakeNewSolicitud}>
        <PedirContratacion>Solicitar contratación</PedirContratacion>
        <MensajeAProveedor
          maxLength="280"
          placeholder={`Escribe un mensaje para ${"María"}`}
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
          <LabelSimpleSolicitudAlumno htmlFor="email-alumno-solicitud">
            Email
          </LabelSimpleSolicitudAlumno>
          <InputSimpleSolicitudAlumno
            id="email-alumno-solicitud"
            placeholder="Email"
            value={solicitudContratacion.email}
            onChange={(e) =>
              setNewsolicitudContratacion((prevSolicitudContratacion) => ({
                ...prevSolicitudContratacion,
                email: e.target.value
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
            type="submit"
            isDisabled={isSubmitSolicitudDisabled}
          >
            Solicitar
          </SubmitSolicitudButton>
        </SubmitSolicitudButtonContainer>
      </ContratarContainer>
    </Wrapper>
  );
};

export default ServiceDetail;
