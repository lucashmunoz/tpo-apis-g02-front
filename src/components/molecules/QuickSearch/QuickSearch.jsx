import React from "react";
import Input from "components/atoms/Input";
import promoImg1 from "assets/promo-imgs/promo-imgs-banner_1.jpg";
import Button from "components/atoms/Button";

const QuickSearch = () => {
  return (
    <div className="flex bg-gray-200 px-32">
      <div className="w-3/5 p-4 pr-16 flex flex-col items-left justify-center">
        <div className="mb-4">
          <h2 className="text-5xl font-bold text-[#1BA049]">
            Acercando la educación a todo el mundo
          </h2>
        </div>
        <div className="mb-4 flex h-12">
          <div className="w-96">
            <Input type="text" placeholder="Ingresa lo que quieres aprender" />
          </div>
          <div className="ml-6 h-12">
            <Button buttonType="primary">BUSCAR PROFESOR</Button>
          </div>
        </div>
        <div>
          <p className="text-sm">
            Encontrar profesor nunca fue tan fácil. Simplemente ingresa lo que
            desees aprender y elige tu próximo tutor !
          </p>
        </div>
      </div>
      <div className="w-2/5 p-4">
        <img
          className="w-full h-auto"
          src={promoImg1}
          alt="imagen promocional"
        />
      </div>
    </div>
  );
};

export default QuickSearch;
