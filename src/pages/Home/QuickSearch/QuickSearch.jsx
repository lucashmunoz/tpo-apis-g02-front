import { useState, useEffect, useRef } from "react";
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

const placeholders = [
  "Ingresa lo que quieres aprender",
  "Matemáticas",
  "Inglés",
  "Cocina Hogareña"
];

/**
 * hook para poder usar un interval con estado de react
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

const QuickSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();

  const handleBuscarProfesor = (e) => {
    e.preventDefault();
    nav("/services", { state: { subject: searchValue.toString() } });
  };

  const [placeholderValue, setPlaceholderValue] = useState(""); // el valor final del placeholder que se va a renderizar en el buscador
  const [placeholderCursorIndex, setPlaceholderCursorIndex] = useState(0); // el indice del placeholder hasta donde hacer el corte
  const [placeholderTextIndex, setPlaceholderTextIndex] = useState(0); // el indice de cual es el placeholder a recortar

  useInterval(() => {
    setPlaceholderValue(
      placeholders[placeholderTextIndex].slice(0, placeholderCursorIndex)
    ); // se calcula el placeholder a mostrar

    if (placeholderCursorIndex >= placeholders[placeholderTextIndex].length) {
      setPlaceholderTextIndex((prev) =>
        prev + 1 < placeholders.length ? prev + 1 : 0
      ); // seteando el indice correspondiente al proximo texto
      setPlaceholderCursorIndex(0); // se reinicia el indice donde hacer el corte
    } else {
      setPlaceholderCursorIndex((prev) => prev + 1); // se aumenta en 1 el indice
    }
  }, 125);

  return (
    <QuickSearchWrapper>
      <SearchBoxContainer onSubmit={handleBuscarProfesor}>
        <SearchBoxTitle>Acercando la educación a todo el mundo</SearchBoxTitle>
        <SearchControls>
          <SearchInputWrapper>
            <Input
              type="text"
              placeholder={placeholderValue}
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
