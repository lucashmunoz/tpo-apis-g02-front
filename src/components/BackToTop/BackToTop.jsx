import { useEffect, useState } from "react";
import styled from "styled-components";

const CircleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #22c55e;
  color: white;
  font-weight: bold;
  font-size: 25px;

  position: fixed;
  right: 20px;
  bottom: 20px;

  &:hover {
    background-color: #16a34a;
  }
`;

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const setButtonVisibility = () =>
    setShowButton(window.scrollY >= window.innerHeight * 0.1);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  /**
   * Se crean los event listener de scroll y resize para que cuando cambien se
   * revise la posición de scroll vertical a ver si hay que mostrar el botón
   */
  useEffect(() => {
    setButtonVisibility();

    document.addEventListener("scroll", setButtonVisibility);
    document.addEventListener("resize", setButtonVisibility);

    return () => {
      document.removeEventListener("scroll", setButtonVisibility);
      document.removeEventListener("resize", setButtonVisibility);
    };
  }, []);

  return showButton && <CircleButton onClick={handleBackToTop}>↑</CircleButton>;
};

export default BackToTop;
