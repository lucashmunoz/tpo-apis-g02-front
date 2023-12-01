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

/** Enmascaa el precio de la publicacion. Ej. 35.5 => $35.50 */
const maskPrecio = (precio) => {
  if (precio === 0 || precio === "") {
    return "0.00";
  } else {
    return `$${parseFloat(precio).toFixed(2)}`;
  }
};

/** Desmascaa el precio de la publicacion. Ej. $35.50 => 35.0 */
const unmaskPrecio = (precio) => {
  const noDollarSignPrecio = precio.substring(1);
  if (isNaN(noDollarSignPrecio)) {
    return "0.00";
  }
  return parseFloat(noDollarSignPrecio);
};

const NewService = () => {
  const [datosPublicacion, setDatosPublicacion] = useState(
    datosInicialesPublicacion
  );

  const [loggedUser] = useContext(UserContext);

  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  const [categoriaElegida, setCategoriaElegida] = useState("");
  const [tipoClaseElegida, setTipoClaseElegida] = useState("");
  const [frecuenciaElegida, setFrecuenciaElegida] = useState("");

  const sendService = () => {
    const body = {
      mentorId: loggedUser._id,
      service: {
        title: datosPublicacion.nombrePublicacion,
        summaryDescription: datosPublicacion.sobreElServicio,
        category: categoriaElegida,
        frequency: frecuenciaElegida,
        classType: tipoClaseElegida,
        aboutMe: datosPublicacion.sobreMi,
        price: unmaskPrecio(datosPublicacion.precio)
      }
    };
    try {
      axios.post("http://localhost:4000/api/service/setservice", body, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": loggedUser.token
        }
      });
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
                    value={datosPublicacion.precio}
                    placeholder="Precio"
                    onBlur={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        precio: maskPrecio(e.target.value)
                      }));
                    }}
                    onFocus={(e) => {
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        precio: unmaskPrecio(e.target.value)
                      }));
                    }}
                    onChangeHandler={(e) => {
                      if (isNaN(e.target.value)) {
                        return;
                      }
                      setDatosPublicacion((prevDatos) => ({
                        ...prevDatos,
                        precio: e.target.value
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
                  onChangeHandler={(e) => setCategoriaElegida(e.target.value)}
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-tipo-clase"
                  labelText="Tipo de Clase"
                  options={opcionesTipoClase}
                  placeholderOptionLabel="Tipo de Clase"
                  onChangeHandler={(e) => setTipoClaseElegida(e.target.value)}
                />
              </ControlContainer>
              <ControlContainer>
                <OpcionDropdown
                  id="dropdown-frecuencias"
                  labelText="Frecuencia"
                  options={opcionesFrecuencias}
                  placeholderOptionLabel="Frecuencia"
                  onChangeHandler={(e) => setFrecuenciaElegida(e.target.value)}
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
            <PrimaryButton onClick={sendService} type="button">
              Publicar Servicio
            </PrimaryButton>
          </GuardarCambiosButtonContainer>
        </DescriptionContent>
      </DescripcionContainer>
    </Wrapper>
  );
};

export default NewService;
