import ServiceCard from "./ServiceCard";
import styled from "styled-components";

const Services = ({}) => {
  const DivColumn = styled.div`
    display: flex;
    flex-grow: unset;
    flex-flow: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 5%;
  `;

  return (
    <div>
      <DivColumn>
        <div>
          <h2>Nombre Default</h2>
        </div>
      </DivColumn>
      <DivColumn>
        <div></div>
      </DivColumn>
    </div>
  );
};

export default Services;
