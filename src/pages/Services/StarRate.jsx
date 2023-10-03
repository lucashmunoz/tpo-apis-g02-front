import { useState } from "react";
import styled from "styled-components";
import CheckedStar from "assets/icons/star-filled.svg";
import UncheckedStar from "assets/icons/star-no-filled.svg";

const Wrapper = styled.div``;

const Rates = styled.div`
  display: flex;
`;

const Star = styled.button``;

const StarImg = styled.img`
  width: 24px;
  height: 24px;
`;

const StarRate = () => {
  const [rate, setRate] = useState(0);

  const handleRateChange = (e, newRate) => {
    if (rate === newRate) {
      setRate(newRate - 1);
    } else {
      setRate(newRate);
    }
  };

  console.log({ rate });

  return (
    <Wrapper>
      <label>Calificación</label>
      <Rates>
        <Star name="1" onClick={(e) => handleRateChange(e, 1)}>
          <StarImg src={rate >= 1 ? CheckedStar : UncheckedStar} />
        </Star>
        <Star name="2" onClick={(e) => handleRateChange(e, 2)}>
          <StarImg src={rate >= 2 ? CheckedStar : UncheckedStar} />
        </Star>
        <Star name="3" onClick={(e) => handleRateChange(e, 3)}>
          <StarImg src={rate >= 3 ? CheckedStar : UncheckedStar} />
        </Star>
        <Star name="4" onClick={(e) => handleRateChange(e, 4)}>
          <StarImg src={rate >= 4 ? CheckedStar : UncheckedStar} />
        </Star>
        <Star name="5" onClick={(e) => handleRateChange(e, 5)}>
          <StarImg src={rate >= 5 ? CheckedStar : UncheckedStar} />
        </Star>
      </Rates>
    </Wrapper>
  );
};

export default StarRate;
