import styled from "styled-components";
import CheckedStar from "assets/icons/star-filled.svg";

const CardContainer = styled.button`
  width: 300px;
  height: 290px;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfesorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const NombreProfesor = styled.label``;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HorizontalLine = styled.hr`
  background-color: #096227;
  height: 2px;
  margin-bottom: 10px;
`;

const SummaryDescription = styled.p`
  text-align: left;
  font-style: italic;
`;

const FrequencyRatePrice = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Frequency = styled.div`
  background-color: #d1d1d1;
  padding: 8px 24px;
  border-radius: 15px;
`;

const Rate = styled.div`
  display: flex;
  align-items: center;
`;

const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

const Price = styled.span``;

const funcTemp = () => {
  console.log("Card details");
};

const ServiceCard = ({
  profilePhoto,
  title,
  summaryDescription,
  price,
  frequency,
  rate,
  nombreProfesor
}) => {
  return (
    <CardContainer onClick={funcTemp}>
      <CardHeader>
        <H3>{title}</H3>
        <ProfesorContainer>
          <Img src={profilePhoto} alt={title} />
          <NombreProfesor>{nombreProfesor}</NombreProfesor>
        </ProfesorContainer>
      </CardHeader>
      <SummaryDescription>
        <HorizontalLine />
        {summaryDescription}
      </SummaryDescription>
      <FrequencyRatePrice>
        <Frequency>{frequency}</Frequency>
        <Rate>
          <StarImg src={CheckedStar} />
          {parseFloat(rate).toFixed(2)}
        </Rate>
        <Price>${parseFloat(price).toFixed(2)}</Price>
      </FrequencyRatePrice>
    </CardContainer>
  );
};

export default ServiceCard;
