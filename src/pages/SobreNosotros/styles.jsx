import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 60px 20px;
`;

export const Content = styled.div`
  display: flex;
  background-color: #f3f4f6;
  border-radius: 25px;
  justify-content: flex-start;
  display: flex;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    padding-bottom: 30px;
  }
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
