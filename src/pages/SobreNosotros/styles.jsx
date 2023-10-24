import styled from "styled-components";

export const WhoWeAre = styled.div`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  background-color: #f3f4f6;
  width: 90%;
  margin-top: 55px;
  margin-bottom: 55px;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ImagePeople = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 30%;
    flex-direction: row;
  }
`;

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 15px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding-bottom: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const TitleAbout = styled.h2`
  color: black;
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const TextContent = styled.p`
  color: black;
`;
