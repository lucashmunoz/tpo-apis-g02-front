import React from "react";
import styled from "styled-components";
import Input from "components/atoms/Input";
import promoImg1 from "assets/promo-imgs/promo-imgs-banner_1.jpg";
import Button from "components/atoms/Button";

const QuickSearchWrapper = styled.div`
  background-color: #f3f4f6;
  padding: 60px 20px;
  margin: auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBoxContainer = styled.div`
  width: calc(min(600px, 100%));
`;

const SearchBoxTitle = styled.h2`
  color: #1ba049;
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
`;

const SearchControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchInputWrapper = styled.div`
  width: 385px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled(Input)``;

const SearchButton = styled(Button)`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SearchPromoText = styled.p`
  font-size: 14px;
  text-align: justify;
`;

const PromoImgContainer = styled.div`
  width: calc(min(40%, 400px));
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

const PromoImg = styled.img`
  height: auto;
  width: 100%;
`;

const QuickSearch = () => {
  return (
    <QuickSearchWrapper>
      <SearchBoxContainer>
        <SearchBoxTitle>Acercando la educación a todo el mundo</SearchBoxTitle>
        <SearchControls>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="Ingresa lo que quieres aprender"
            />
          </SearchInputWrapper>
          <SearchButton buttonType="primary">BUSCAR PROFESOR</SearchButton>
        </SearchControls>
        <SearchPromoText>
          Encontrar profesor nunca fue tan fácil. Simplemente ingresa lo que
          desees aprender y elige tu próximo tutor!
        </SearchPromoText>
      </SearchBoxContainer>

      <PromoImgContainer>
        <PromoImg src={promoImg1} alt="imagen promocional" />
      </PromoImgContainer>
    </QuickSearchWrapper>
  );
};

export default QuickSearch;
