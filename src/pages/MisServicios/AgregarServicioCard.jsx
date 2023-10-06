import styled from "styled-components";
import AddSquare from "assets/icons/add-square.svg";
import { useNavigate } from "react-router-dom";

const CardContainer = styled.button`
  width: 300px;
  height: 340px;
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const AddImg = styled.img`
  height: 80px;
  width: 80px;
  transition: 0.25s;

  &:hover {
    height: 140px;
    width: 140px;
  }
`;

const AgregarServicioCard = () => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate("/newservice")}>
      <AddImg src={AddSquare} alt="agregar servicio" />
    </CardContainer>
  );
};

export default AgregarServicioCard;
