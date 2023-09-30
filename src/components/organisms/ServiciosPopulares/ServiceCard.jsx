import styled from "styled-components";

const ServiceCard = ({ backgroundImg, title }) => {
  const CardContainer = styled.div`
    width: 300px;
    height: 500px;
    background: lightblue url(${backgroundImg}) no-repeat fixed center;
  `;

  const H3 = styled.h3`
    text-align: left;
    font-size: 24px;
    font-weight: bold;
  `;

  return (
    <CardContainer>
      <H3>{title}</H3>
    </CardContainer>
  );
};

export default ServiceCard;
