import { useState } from "react";
import styled from "styled-components";
import profilePicture1 from "assets/mock-imgs/ana.png";
import Input from "components/atoms/Input";
import PrimaryButton from "components/atoms/PrimaryButton";

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
