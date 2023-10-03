import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import StarRate from "./StarRate";
import { useEffect, useState } from "react";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const ControlContainer = styled.div`
  margin-top: 15px;
`;

const Filtros = () => {
  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  const fetchFilters = async () => {
    const response = await fetch("mocks/filtervalues.json");
    const filters = await response.json();

    setOpcionesCategorias(filters.categories);
    setOpcionesTipoClase(filters.classTypes);
    setOpcionesFrecuencias(filters.frequencies);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  return (
    <Wrapper>
      <ControlContainer>
        <Dropdown
          id="dropdown-categorias"
          labelText="Categoría"
          options={opcionesCategorias}
          placeholderLabel="Categoría"
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-tipo-clase"
          labelText="Tipo de Clase"
          options={opcionesTipoClase}
          placeholderLabel="Tipo de Clase"
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-frecuencias"
          labelText="Frecuencia"
          options={opcionesFrecuencias}
          placeholderLabel="Frecuencia"
        />
      </ControlContainer>
      <ControlContainer>
        <StarRate />
      </ControlContainer>
    </Wrapper>
  );
};

export default Filtros;
