import styled from "styled-components";

const H3 = styled.h3`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  background: lightblue no-repeat fixed center
    url(${(props) => (props.$backgroundImg ? props.$backgroundImg : "")});
`;

const ServiceCard = ({ backgroundImg, title }) => {
  return (
    <CardContainer $backgroundImg={backgroundImg}>
      <H3>{title}</H3>
    </CardContainer>
  );
};

export default ServiceCard;
