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

export const Rate = styled.div`
  margin-top: auto;
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

export const AcercaDeContent = styled.textarea`
  margin-top: 12px;
  width: 100%;
  height: 150px;
  padding: 10px;
`;

export const GuardarCambiosButtonContainer = styled.div`
  margin-top: 40px;
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

export const UserCommentLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

export const UserCommentAccions = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CommentActionImg = styled.img`
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    margin: 15px 0;
    width: 40px;
    height: 40px;
  }
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
