import { useState, useEffect, useContext } from "react";
import PrimaryButton from "components/PrimaryButton";
import UserContext from "user-context";
import axios from "axios";
import {
  Wrapper,
  DescripcionContainer,
  DescriptionContent,
  ContainerTituloServicio,
  TituloServicio,
  PerfilTutor,
  ProfileImg,
  ProfileDescription,
  NombrePrecioContainer,
  NombreTutor,
  ContainerPrecioTutor,
  PrecioTutor,
  ControlContainer,
  OpcionDropdown,
  AcercaDe,
  AcercaDeTitle,
  AcercaDeContent,
  GuardarCambiosButtonContainer
} from "./styles";

const datosInicialesPublicacion = {
  nombrePublicacion: "",
  tituloTutor: "",
  precio: "0",
  sobreElServicio: "",
  sobreMi: ""
};

const NewService = () => {
  const [datosPublicacion, setDatosPublicacion] = useState(
    datosInicialesPublicacion
  );

  const [loggedUser, setLoggedUser] = useContext(UserContext);
  console.log(loggedUser);

  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  const sendService = () => {
    let body = {
      mentorId: loggedUser._id,
      service: {
        title: datosInicialesPublicacion.nombrePublicacion,
        summaryDescription: datosInicialesPublicacion.sobreElServicio,
        category: opcionesCategorias,
        frecuency: opcionesFrecuencias,
        classType: opcionesCategorias,
        aboutMe: datosInicialesPublicacion.sobreMi,
        price: datosInicialesPublicacion.precio
      }
    };
    console.log(body);
    try {
      let response = axios.post(
        "http://localhost:4000/api/service/setservice",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        }
      );
      console.log(response);
    } catch (e) {}
  };

  // Llamamos a fetchFilters en el mount del componente
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

  return (
    <Wrapper>
      <DescripcionContainer>
        <DescriptionContent>
          <ContainerTituloServicio>
            <TituloServicio
              value={datosPublicacion.nombrePublicacion.toUpperCase()}
              placeholder="Título servicio"
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
              src={loggedUser?.profilePhoto}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>{loggedUser?.name}</NombreTutor>
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

              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-categorias"
                  labelText="Categoría"
                  options={opcionesCategorias}
                  placeholderOptionLabel="Categoría"
                  onChangeHandler={(e) => setOpcionesCategorias(e.target.value)}
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-tipo-clase"
                  labelText="Tipo de Clase"
                  options={opcionesTipoClase}
                  placeholderOptionLabel="Tipo de Clase"
                  onChangeHandler={(e) => setOpcionesTipoClase(e.target.value)}
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-frecuencias"
                  labelText="Frecuencia"
                  options={opcionesFrecuencias}
                  placeholderOptionLabel="Frecuencia"
                  onChangeHandler={(e) =>
                    setOpcionesFrecuencias(e.target.value)
                  }
                />
              </ControlContainer>
            </ProfileDescription>
          </PerfilTutor>
          <AcercaDe>
            <AcercaDeTitle>Sobre el servicio</AcercaDeTitle>
            <AcercaDeContent
              placeholder="Cuéntale a los alumnos de qué trata tu curso"
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
              placeholder="¡Comenta por qué eres la mejor elección!"
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
            <PrimaryButton onClick={sendService}>
              Publicar Servicio
            </PrimaryButton>
          </GuardarCambiosButtonContainer>
        </DescriptionContent>
      </DescripcionContainer>
    </Wrapper>
  );
};

export default NewService;
