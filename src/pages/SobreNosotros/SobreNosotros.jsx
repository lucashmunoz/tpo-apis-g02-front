import styled from "styled-components";
import pexelsimage from "../../assets/pexelsbanner.jpg";

const WhoWeAre = styled.div`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  background-color: #909191;
  width: 90%;
  margin-top: 55px;
  margin-bottom: 55px;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ImagePeople = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
    flex-direction: row;
  }
`;

const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    height: 70%;
    display: block;
    padding: 5px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TitleAbout = styled.h2`
  color: white;
  font-size: 46px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const SobreNosotros = () => {
  return (
    <Wrapper>
      <WhoWeAre>
        <ImagePeople src={pexelsimage} />
        <DivAbout>
          <TitleAbout>¿Quiénes Somos?</TitleAbout>
          <a>
            Somos un grupo de personas que alguna vez estuvimos donde hoy estás
            y buscamos crear la red de conexiones estudiante-profesor más grande
            del mundo
            <br />
            Sabemos lo complicado que es encontrar alguien que se adecúe a vos y
            por eso te prestamos toda la información que necesites para
            encontrar aquel servicio que estás buscando. ¿Querés ayudar a los
            demás en su proceso de aprendizaje? Sumate como Mentor y ayuda a los
            demás a mejorar sus habilidades. ¿Sos un estudiante o te encantaría
            embarcarte en un nuevo mundo de conocimientos? Busca el tema que
            deseas, un Mentor que se acerque a tus preferencias e inicia a
            aprender!
          </a>
        </DivAbout>
      </WhoWeAre>
    </Wrapper>
  );
};

export default SobreNosotros;
