import { useState } from "react";
import CheckedStar from "assets/icons/star-filled.svg";
import UncheckedStar from "assets/icons/star-no-filled.svg";
import { Rates, StarImg } from "./styles";

const StarRate = ({ onChangeHandler, labelText }) => {
  const [selectedRate, setSelectedRate] = useState(0);

  const handleRateChange = (newRate) => {
    // Si se selecciona o deselecciona 1 estrella, el rate a asignar sera 1
    if (newRate === 1) {
      setSelectedRate(1);
      onChangeHandler(1);
      return;
    }

    /*
     * Si el rate es entre 2 y 5 y ya se tenia previamente seleccionado
     * se elimina solamente ese rate seleccinoado
     */
    if (selectedRate === newRate) {
      setSelectedRate(newRate - 1);
      onChangeHandler(newRate - 1);
      return;
    }

    // Si el rate seleccionado no lo estaba previamente, será el nuevo valor a asignar
    setSelectedRate(newRate);
    onChangeHandler(newRate);
  };

  return (
    <div>
      {labelText && <label>{labelText}</label>}
      <Rates>
        {[1, 2, 3, 4, 5].map((estrellaNumero) => (
          <button
            key={estrellaNumero}
            type="button"
            name={estrellaNumero}
            onClick={() => handleRateChange(estrellaNumero)}
          >
            <StarImg
              src={selectedRate >= estrellaNumero ? CheckedStar : UncheckedStar}
              alt={`${estrellaNumero} estrellas`}
            />
          </button>
        ))}
      </Rates>
    </div>
  );
};

export default StarRate;
