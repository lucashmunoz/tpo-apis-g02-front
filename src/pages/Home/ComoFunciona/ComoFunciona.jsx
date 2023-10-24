import React from "react";
import styled from "styled-components";
import stepOne from "assets/numeric-steps/step-one.svg";
import stepTwo from "assets/numeric-steps/step-two.svg";
import stepThree from "assets/numeric-steps/step-three.svg";
import StepCard from "./StepCard";

const ComoFuncionaContainer = styled.div`
  background-color: white;
  padding: 60px 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Titulo = styled.h2`
  color: #096227;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitulo = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  font-style: italic;
`;

const StepCardsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ComoFunciona = () => {
  return (
    <ComoFuncionaContainer>
      <Titulo>¿Cómo funciona?</Titulo>
      <Subtitulo>Con SkillMentor aprender nunca fue tan simple </Subtitulo>
      <StepCardsWrapper>
        <StepCard
          img={stepOne}
          title="Selecciona el tema"
          text="Primero deberas elegir sobre que tema buscas aprender, ¡No te limites, en SkillMentor tenemos una amplia variedad de tópicos para aprender!"
        />
        <StepCard
          img={stepTwo}
          title="Elige tu próximo profesor"
          text="Encuentra el profesor que más se adecúe tus necesidades. Te daremos toda la información posible para que puedas elegir correctamente."
        />
        <StepCard
          img={stepThree}
          title="Contáctalo y ¡a aprender!"
          text="Ya seleccionado el profesor solo queda contactarlo por nuestra plataforma y ahora a agendar las clases."
        />
      </StepCardsWrapper>
    </ComoFuncionaContainer>
  );
};

export default ComoFunciona;
