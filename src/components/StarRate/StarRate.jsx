import { useState } from "react";
import CheckedStar from "assets/icons/star-filled.svg";
import UncheckedStar from "assets/icons/star-no-filled.svg";
import { Rates, StarImg } from "./styles";

const StarRate = ({ onChangeHandler, labelText }) => {
  const [selectedRate, setSelectedRate] = useState(0);

  const handleRateChange = (e, newRate) => {
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
        <button type="button" name="1" onClick={(e) => handleRateChange(e, 1)}>
          <StarImg
            src={selectedRate >= 1 ? CheckedStar : UncheckedStar}
            alt="1 estrella"
          />
        </button>
        <button type="button" name="2" onClick={(e) => handleRateChange(e, 2)}>
          <StarImg
            src={selectedRate >= 2 ? CheckedStar : UncheckedStar}
            alt="2 estrellas"
          />
        </button>
        <button type="button" name="3" onClick={(e) => handleRateChange(e, 3)}>
          <StarImg
            src={selectedRate >= 3 ? CheckedStar : UncheckedStar}
            alt="3 estrellas"
          />
        </button>
        <button type="button" name="4" onClick={(e) => handleRateChange(e, 4)}>
          <StarImg
            src={selectedRate >= 4 ? CheckedStar : UncheckedStar}
            alt="4 estrellas"
          />
        </button>
        <button type="button" name="5" onClick={(e) => handleRateChange(e, 5)}>
          <StarImg
            src={selectedRate >= 5 ? CheckedStar : UncheckedStar}
            alt="5 estrellas"
          />
        </button>
      </Rates>
    </div>
  );
};

export default StarRate;