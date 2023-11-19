import aboutUsImg from "../../assets/about-us.jpg";
import { Wrapper, Content, Img, AboutContainer, TitleAbout } from "./styles";

const SobreNosotros = () => {
  return (
    <Wrapper>
      <Content>
        <Img src={aboutUsImg} />
        <AboutContainer>
          <TitleAbout>¿Quiénes Somos?</TitleAbout>
          <p>
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
          </p>
        </AboutContainer>
      </Content>
    </Wrapper>
  );
};

export default SobreNosotros;
