import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const H3 = styled.h3`
  margin-top: 24px;
  font-size: 20px;
`;

const Text = styled.p`
  margin-top: 4px;
  text-align: left;
  font-style: italic;
`;

const StepCard = ({ img, title, text }) => {
  return (
    <CardContainer>
      <Img src={img} alt={title} />
      <H3>{title}</H3>
      <Text>{text}</Text>
    </CardContainer>
  );
};

export default StepCard;
