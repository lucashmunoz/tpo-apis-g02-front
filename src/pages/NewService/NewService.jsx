import { useState, useEffect } from "react";
import PrimaryButton from "components/PrimaryButton";
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
  ContainerTitulosTutor,
  TitulosTutor,
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

  const [user, setUser] = useState({});

  const setUserLogged = () => {
    const userLoggedJSON = window.sessionStorage.getItem("loggedUser");

    // Comprueba si el valor existe en la sesión.
    if (userLoggedJSON) {
      try {
        // Intenta convertir el valor JSON en un objeto JavaScript.
        const userLogged = JSON.parse(userLoggedJSON);
        setUser(userLogged);
      } catch {}
    }
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    setUserLogged();
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
              src={user.profilePhoto}
              alt="foto de perfil del profesor"
            />
            <ProfileDescription>
              <NombrePrecioContainer>
                <NombreTutor>Juan</NombreTutor>
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
                  placeholder="Titulos personales"
                  value={datosPublicacion.tituloTutor}
                  onChangeHandler={(e) =>
                    setDatosPublicacion((prevDatos) => ({
                      ...prevDatos,
                      tituloTutor: e.target.value
                    }))
                  }
                />
              </ContainerTitulosTutor>
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
            <PrimaryButton>Publicar Servicio</PrimaryButton>
          </GuardarCambiosButtonContainer>
        </DescriptionContent>
      </DescripcionContainer>
    </Wrapper>
  );
};

export default NewService;
