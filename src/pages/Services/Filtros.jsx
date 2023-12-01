import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import StarRate from "components/StarRate";
import TextButton from "components/TextButton";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const ControlContainer = styled.div`
  margin-top: 15px;
`;

const ReiniciarFIltrosButton = styled(TextButton)`
  margin-top: 32px;
`;

const Filtros = ({ setFilters }) => {
  const [opcionesCategorias, setOpcionesCategorias] = useState([]);
  const [opcionesTipoClase, setOpcionesTipoClase] = useState([]);
  const [opcionesFrecuencias, setOpcionesFrecuencias] = useState([]);
  const [tema, setTema] = useState("");
  const [debouncedTema] = useDebounce(tema, 500);

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      subject: debouncedTema
    }));
  }, [debouncedTema, setFilters]);

  // Desde state recibieremos la búsqueda ingresada en home
  const { state: linkState } = useLocation();

  const handleReiniciarFiltros = () => {
    setFilters({
      category: "",
      frequency: "",
      classType: "",
      rate: 0,
      subject: ""
    });
  };

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

    window.history.replaceState({}, document.title);
  }, [linkState?.subject, setFilters]);

  return (
    <search role="search">
      <Wrapper onSubmit={(e) => e.preventDefault()}>
        <ControlContainer>
          <Dropdown
            id="dropdown-categorias"
            labelText="Categoría"
            options={opcionesCategorias}
            placeholderOptionLabel="Categoría"
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
            placeholderOptionLabel="Tipo de Clase"
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
            placeholderOptionLabel="Frecuencia"
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
            value={tema}
            onChangeHandler={(e) => setTema(e.target.value)}
          />
        </ControlContainer>
        <ControlContainer>
          <StarRate
            labelText="Calificación Mínima"
            onChangeHandler={(newRate) =>
              setFilters((prevFilters) => ({
                ...prevFilters,
                rate: newRate
              }))
            }
          />
        </ControlContainer>

        <ReiniciarFIltrosButton onClick={handleReiniciarFiltros}>
          Reiniciar filtros
        </ReiniciarFIltrosButton>
      </Wrapper>
    </search>
  );
};

export default Filtros;
