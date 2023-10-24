import styled from "styled-components";
import Dropdown from "components/Dropdown";
import PrimaryButton from "components/PrimaryButton";

export const Wrapper = styled.div`
  display: flex;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 60px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DescripcionContainer = styled.div`
  width: calc((100% / 12) * 8);
  background-color: #f3f4f6;
  float: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DescriptionContent = styled.div`
  padding: 0 20px;
  width: 100%,
  float: left;
`;

export const TituloServicio = styled.h3`
  padding: 32px 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const PerfilTutor = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileImgContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ProfileImg = styled.img`
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
    margin: 20px 0;
  }
`;

export const NombreTutor = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const PrecioTutor = styled.label`
  font-size: 24px;
  font-weight: bold;
`;

export const TitulosTutor = styled.label`
  font-size: 20px;
`;

export const Rate = styled.div`
  display: flex;
  color: black;
`;

export const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

export const AcercaDe = styled.div`
  margin-top: 40px;
`;

export const AcercaDeTitle = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const AcercaDeContent = styled.p`
  margin-top: 12px;
`;

export const CommentsContainer = styled.div`
  margin-top: 40px;
`;

export const CommentsLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

export const CommentsHR = styled.hr`
  width: 100%;
  height: 1px;
  color: grey;
  margin: 20px 20px 20px 0;
`;

export const Comentario = styled.div`
  margin: 20px 0;
  display: flex;
`;

export const UserCommentLogo = styled.div`
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

export const UserComment = styled.div`
  margin-left: 20px;
  width: 100%;
`;

export const UserCommentRateAndName = styled.div`
  display: flex;
  align-items: center;
`;

export const UserCommentRate = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const UserCommentName = styled.label`
  margin-left: 15px;
  font-weight: bold;
`;

export const UserCommentText = styled.p`
  margin-top: 8px;
`;

export const NewCommentNameContainer = styled.div`
  display: flex;
  margin-left: 15px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NewCommentRateAndName = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const NewUserNameInput = styled.input`
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

export const NewCommentText = styled.textarea`
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

export const SubmitCommentButtonContainer = styled.div`
  float: right;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const SubmitCommentButton = styled(PrimaryButton)`
  float: right;
`;

export const ContratarContainer = styled.form`
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

export const PedirContratacion = styled.h3`
  font-size: 24px;
  font-weight: bold;
  padding: 32px 0;
  text-align: center;
`;

export const MensajeAProveedor = styled.textarea`
  height: 100px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

export const InputSimpleSolicitudAlumnoContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const LabelSimpleSolicitudAlumno = styled.label`
  width: 100px;
  display: inline-block;
`;

export const InputSimpleSolicitudAlumno = styled.input`
  padding-left: 10px;
  border: 1px solid #ebded5;

  &:hover {
    border: 1px solid #22c55e;
  }
`;

export const FrequencyRateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: grey;

  margin-top: auto;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Frequency = styled.div`
  background-color: #d1d1d1;
  width: 90px;
  padding: 2px 8px;
  border-radius: 8px;
  color: #505050;
`;

export const DropdownHorarioContacto = styled(Dropdown)`
  width: 100%;
`;

export const SubmitSolicitudButtonContainer = styled.div`
  margin-top: 10px;
`;
