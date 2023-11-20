import { useState } from "react";
import { useNavigate } from "react-router-dom";
import promoImg1 from "assets/promo-imgs/promo-imgs-banner_1.jpg";
import Input from "components/Input";
import {
  PromoImgContainer,
  PromoImg,
  QuickSearchWrapper,
  SearchBoxContainer,
  SearchBoxTitle,
  SearchButton,
  SearchButtonContainer,
  SearchControls,
  SearchInputWrapper,
  SearchPromoText
} from "./styles";

const QuickSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();

  const handleBuscarProfesor = (e) => {
    e.preventDefault();
    nav("/services", { state: { subject: searchValue.toString() } });
  };

  return (
    <QuickSearchWrapper>
      <SearchBoxContainer onSubmit={handleBuscarProfesor}>
        <SearchBoxTitle>Acercando la educación a todo el mundo</SearchBoxTitle>
        <SearchControls>
          <SearchInputWrapper>
            <Input
              type="text"
              placeholder="Ingresa lo que quieres aprender"
              inputType="primary"
              onChangeHandler={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </SearchInputWrapper>
          <SearchButtonContainer>
            <SearchButton type="submit">BUSCAR PROFESOR</SearchButton>
          </SearchButtonContainer>
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
