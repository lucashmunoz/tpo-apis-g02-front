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
    display: block;
    padding-bottom: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const TitleAbout = styled.h2`
  color: black;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const TextContent = styled.p`
  color: black;
`;

const SobreNosotros = () => {
  return (
    <Wrapper>
      <WhoWeAre>
        <ImagePeople src={pexelsimage} />
        <DivAbout>
          <TitleAbout>¿Quiénes Somos?</TitleAbout>
          <TextContent>
            Somos un grupo de personas que alguna vez estuvimos donde te
            encuentras y buscamos crear la red de conexiones estudiante-profesor
            más grande del mundo.
            <br />
            <br />
            Sabemos lo complicado que es encontrar alguien que se adecúe a uno y
            por eso te prestamos toda la información que necesites para
            encontrar aquel servicio que estás buscando. ¿Quieres ayudar a los
            demás en su proceso de aprendizaje? Sumate como Mentor y ayuda a los
            demás a mejorar sus habilidades. ¿Eres un estudiante o te encantaría
            embarcarte en un nuevo mundo de conocimientos? Busca el tema que
            deseas, un mentor que se acerque a tus preferencias y comienza a
            aprender!
          </TextContent>
        </DivAbout>
      </WhoWeAre>
    </Wrapper>
  );
};

export default SobreNosotros;
