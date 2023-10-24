import pexelsimage from "../../assets/pexelsbanner.jpg";
import {
  Wrapper,
  WhoWeAre,
  ImagePeople,
  DivAbout,
  TitleAbout,
  TextContent
} from "./styles";

const SobreNosotros = () => {
  return (
    <Wrapper>
      <WhoWeAre>
        <ImagePeople src={pexelsimage} />
        <DivAbout>
          <TitleAbout>¿Quiénes Somos?</TitleAbout>
          <br />
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
