import styled from "styled-components";
import CheckedStar from "assets/icons/star-filled.svg";

const CardContainer = styled.button`
  width: 300px;
  height: 340px;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  -webkit-transition: background-color 250ms linear;
  -ms-transition: background-color 250ms linear;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const ProfesorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`;

const Img = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
`;

const NombreProfesor = styled.label`
  margin-top: 5px;
  cursor: pointer;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
`;

const HRContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`;

const HorizontalLine = styled.hr`
  background-color: #096227;
  height: 2px;
  width: 100%;
`;

const SummaryDescription = styled.label`
  text-align: left;
  margin-top: 2px;
  cursor: pointer;
`;

const FrequencyRatePrice = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const FrequencyRateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: grey;
`;

const Frequency = styled.div`
  background-color: #d1d1d1;
  width: 78px;
  padding: 2px 8px;
  border-radius: 8px;
  color: #505050;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: black;
`;

const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

const Price = styled.span`
  margin-top: 8px;
  font-weight: bold;
  font-size: 20px;
`;

const ServiceCard = ({
  profilePhoto,
  title,
  summaryDescription,
  price,
  frequency,
  rate,
  nombreProfesor,
  onClickHandler
}) => {
  return (
    <CardContainer onClick={onClickHandler}>
      <CardHeader>
        <Img src={profilePhoto} alt={title} />
        <ProfesorContainer>
          <H3>{title}</H3>
          <NombreProfesor>{nombreProfesor}</NombreProfesor>
        </ProfesorContainer>
      </CardHeader>
      <HRContainer>
        <HorizontalLine />
      </HRContainer>
      <SummaryDescription>{summaryDescription}</SummaryDescription>
      <FrequencyRatePrice>
        <FrequencyRateContainer>
          <Frequency>{frequency}</Frequency>
          <Rate>
            <StarImg src={CheckedStar} />
            {parseFloat(rate).toFixed(2)}
          </Rate>
        </FrequencyRateContainer>
        <Price>${parseFloat(price).toFixed(2)}</Price>
      </FrequencyRatePrice>
    </CardContainer>
  );
};

export default ServiceCard;
