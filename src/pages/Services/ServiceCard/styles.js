import styled from "styled-components";

export const CardContainer = styled.button`
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

export const CardHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const ProfesorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Img = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
`;

export const NombreProfesor = styled.span`
  margin-top: 5px;
  cursor: pointer;
`;

export const H3 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
`;

export const HRContainer = styled.div`
  margin: 16px 0;
  width: 100%;
`;

export const HorizontalLine = styled.hr`
  background-color: #096227;
  height: 2px;
  width: 100%;
`;

export const SummaryDescription = styled.p`
  text-align: left;
  margin-top: 2px;
  cursor: pointer;
`;

export const FrequencyRatePrice = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FrequencyRateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: grey;
`;

export const Frequency = styled.div`
  background-color: #d1d1d1;
  width: 78px;
  padding: 2px 8px;
  border-radius: 8px;
  color: #505050;
`;

export const Rate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  color: black;
`;

export const StarImg = styled.img`
  width: 24x;
  height: 24px;
  margin-right: 3px;
`;

export const Price = styled.span`
  margin-top: 8px;
  font-weight: bold;
  font-size: 20px;
`;
