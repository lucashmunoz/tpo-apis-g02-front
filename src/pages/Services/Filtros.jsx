import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import StarRate from "./StarRate";

const opcionesCategorias = [
  {
    label: "Idiomas",
    value: "LANGUAGE"
  },
  {
    label: "Música",
    value: "MUSIC"
  },
  {
    label: "Multimedia",
    value: "MULTIMEDIA"
  },
  {
    label: "Diseño",
    value: "DISENO"
  },
  {
    label: "Programación",
    value: "PROGRAMACION"
  },
  {
    label: "Deportes",
    value: "DEPORTES"
  },
  {
    label: "Cocina",
    value: "COCINA"
  }
];

const opcionesFrecuencias = [
  {
    label: "Única",
    value: "UNICA"
  },
  {
    label: "Semanal",
    value: "SEMANAL"
  },
  {
    label: "Mensual",
    value: "Mensual"
  }
];

const opcinoesTipoClase = [
  {
    label: "Individual",
    value: "INDIVIDUAL"
  },
  {
    label: "Grupal",
    value: "GRUPAL"
  }
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Filtros = () => {
  return (
    <Wrapper>
      <Dropdown
        id="dropdown-categorias"
        labelText="Categoría"
        options={opcionesCategorias}
      />
      <Dropdown
        id="dropdown-tipo-clase"
        labelText="Tipo de Clase"
        options={opcinoesTipoClase}
      />
      <Dropdown
        id="dropdown-frecuencias"
        labelText="Frecuencia"
        options={opcionesFrecuencias}
      />
      <StarRate />
    </Wrapper>
  );
};

export default Filtros;
