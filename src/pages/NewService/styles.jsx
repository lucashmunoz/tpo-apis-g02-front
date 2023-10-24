import styled from "styled-components";
import Input from "components/Input";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px;
`;

export const DescripcionContainer = styled.div`
  width: calc((100% / 12) * 8);
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DescriptionContent = styled.div`
  padding: 0 20px;
  width: 100%,
  float: left;
`;

export const ContainerTituloServicio = styled.div`
  margin: 20px 0;
`;

export const TituloServicio = styled(Input)`
  margin: 32px 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid;
  border-radius: 5px;
`;

export const PerfilTutor = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileImg = styled.img`
  width: 160px;
  height: 160px;
`;

export const ProfileDescription = styled.div`
  padding-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

export const NombrePrecioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const NombreTutor = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerPrecioTutor = styled.div`
  width: 120px;
`;

export const PrecioTutor = styled(Input)`
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerTitulosTutor = styled.div`
  margin-top: 10px;
`;

export const TitulosTutor = styled(Input)`
  margin-top: 50px;
  font-size: 20px;
`;

export const AcercaDe = styled.div`
  margin-top: 40px;
`;

export const AcercaDeTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const AcercaDeContent = styled.textarea`
  margin-top: 12px;
  width: 100%;
  height: 150px;
  padding: 10px;
`;

export const GuardarCambiosButtonContainer = styled.div`
  margin-top: 40px;
`;
