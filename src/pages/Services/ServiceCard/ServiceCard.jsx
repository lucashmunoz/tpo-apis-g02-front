import CheckedStar from "assets/icons/star-filled.svg";
import {
  CardContainer,
  CardHeader,
  ProfesorContainer,
  Img,
  NombreProfesor,
  H3,
  HRContainer,
  HorizontalLine,
  SummaryDescription,
  FrequencyRatePrice,
  FrequencyRateContainer,
  Frequency,
  Rate,
  StarImg,
  Price
} from "./styles";

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
            <StarImg src={CheckedStar} alt="calificacion" />
            {rate === 0 ? "Sin calificación" : parseFloat(rate).toFixed(2)}
          </Rate>
        </FrequencyRateContainer>
        <Price>${parseFloat(price).toFixed(2)}</Price>
      </FrequencyRatePrice>
    </CardContainer>
  );
};

export default ServiceCard;
