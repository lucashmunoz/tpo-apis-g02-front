import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "components/atoms/Dropdown";
import Input from "components/atoms/Input";
import StarRate from "components/atoms/StarRate";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const ControlContainer = styled.div`
  margin-top: 15px;
`;

const Filtros = ({ filters, setFilters }) => {
  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);

  // Desde state recibieremos la búsqueda ingresada en home
  const { state: linkState } = useLocation();

  /**
   * Obtiene los filtros de busqueda del componente
   */
  const fetchFilters = async () => {
    const response = await fetch("mocks/filtervalues.json");
    const filtersValues = await response.json();

    setOpcionesCategorias(filtersValues.categories);
    setOpcionesTipoClase(filtersValues.classTypes);
    setOpcionesFrecuencias(filtersValues.frequencies);
  };

  // Llamamos a fetchFilters en el mount del componente
  useEffect(() => {
    fetchFilters();

    if (linkState?.subject && linkState?.subject.length > 0) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        subject: linkState.subject
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          value={filters.subject}
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
          labelText="Calificación"
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
