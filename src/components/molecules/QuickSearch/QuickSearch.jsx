import React from "react";
import Input from "components/atoms/Input";
import Button from "components/atoms/Button";

const QuickSearch = () => {
  return (
    <div>
      <div>
        <h2>Acercando la educion a todo el mundo</h2>
        <div>
          <Input inputType={"quickSearch"}>
            Ingresa lo que quieras aprender
          </Input>
          <Button buttonType={"primary"}>BUSCAR PROFESOR</Button>
        </div>
        <a>
          Encontrar profesor nunca fue tan fácil. Simplemente ingresa lo que
          desees aprender y elige tu próximo tutor!
        </a>
      </div>
      <div>
        <img></img>
      </div>
    </div>
  );
};

export default QuickSearch;
