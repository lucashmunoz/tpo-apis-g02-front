import { useEffect, useState } from "react";
import StarRate from "./StarRate";
import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import Input from "components/atoms/Input";

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

const Filtros = ({ setFilters }) => {
  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  /**
   * Obtiene los filtros de busqueda del componente
   */
  const fetchFilters = async () => {
    const response = await fetch("mocks/filtervalues.json");
    const filters = await response.json();

    setOpcionesCategorias(filters.categories);
    setOpcionesTipoClase(filters.classTypes);
    setOpcionesFrecuencias(filters.frequencies);
  };

  // Llamamos a fetchFilters en el mount del componente
  useEffect(() => {
    fetchFilters();
  }, []);

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <ControlContainer>
        <Dropdown
          id="dropdown-categorias"
          labelText="Categoría"
          options={opcionesCategorias}
          placeholderLabel="Categoría"
          onChangeHandler={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              category: e.target.value
            }))
          }
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-tipo-clase"
          labelText="Tipo de Clase"
          options={opcionesTipoClase}
          placeholderLabel="Tipo de Clase"
          onChangeHandler={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              classType: e.target.value
            }))
          }
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-frecuencias"
          labelText="Frecuencia"
          options={opcionesFrecuencias}
          placeholderLabel="Frecuencia"
          onChangeHandler={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              frequency: e.target.value
            }))
          }
        />
      </ControlContainer>
      <ControlContainer>
        <Input
          id="tema-servicio"
          labelText="Tema"
          placeholder="Tema"
          inputType="secondary"
          onChangeHandler={(e) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              subject: e.target.value
            }))
          }
        />
      </ControlContainer>
      <ControlContainer>
        <StarRate
          onChangeHandler={(newRate) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              rate: newRate
            }))
          }
        />
      </ControlContainer>
    </Wrapper>
  );
};

export default Filtros;
