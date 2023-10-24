import styled from "styled-components";
import { Link } from "react-router-dom";
import PrimaryButton from "components/PrimaryButton";

export const QuickSearchWrapper = styled.div`
  background-color: #f3f4f6;
  padding: 60px 20px;
  margin: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchBoxContainer = styled.div`
  width: calc(min(600px, 100%));
`;

export const SearchBoxTitle = styled.h2`
  color: #1ba049;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
`;

export const SearchControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInputWrapper = styled.div`
  width: 385px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const SearchButtonContainer = styled.div`
  width: 186px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchButton = styled(PrimaryButton)`
  margin-left: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const SearchPromoText = styled.p`
  font-size: 14px;
  text-align: justify;
`;

export const PromoImgContainer = styled.div`
  width: calc(min(40%, 400px));
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const PromoImg = styled.img`
  height: auto;
  width: 100%;
`;
