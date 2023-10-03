import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import StarRate from "./StarRate";
import { useEffect, useState } from "react";
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

const Filtros = () => {
  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  const [selectedRate, setSelectedRate] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  console.group();
  console.log({ selectedRate });
  console.log({ selectedCategory });
  console.log({ selectedClassType });
  console.log({ selectedFrequency });
  console.log({ selectedSubject });
  console.groupEnd();

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
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <ControlContainer>
        <Dropdown
          id="dropdown-categorias"
          labelText="Categoría"
          options={opcionesCategorias}
          placeholderLabel="Categoría"
          onChangeHandler={(e) => setSelectedCategory(e.target.value)}
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-tipo-clase"
          labelText="Tipo de Clase"
          options={opcionesTipoClase}
          placeholderLabel="Tipo de Clase"
          onChangeHandler={(e) => setSelectedClassType(e.target.value)}
        />
      </ControlContainer>
      <ControlContainer>
        <Dropdown
          id="dropdown-frecuencias"
          labelText="Frecuencia"
          options={opcionesFrecuencias}
          placeholderLabel="Frecuencia"
          onChangeHandler={(e) => setSelectedFrequency(e.target.value)}
        />
      </ControlContainer>
      <ControlContainer>
        <Input
          id="tema-servicio"
          labelText="Tema"
          placeholder="Tema"
          inputType="secondary"
          onChangeHandler={(e) => setSelectedSubject(e.target.value)}
        />
      </ControlContainer>
      <ControlContainer>
        <StarRate
          selectedRate={selectedRate}
          setSelectedRate={setSelectedRate}
        />
      </ControlContainer>
    </Wrapper>
  );
};

export default Filtros;
