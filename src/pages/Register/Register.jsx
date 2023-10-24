import { useEffect, useState } from "react";
import Input from "components/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/PrimaryButton";
import {
  DivImage,
  DivInputs,
  DivRegister,
  ErrorShow,
  Experiencia,
  FormRegister,
  Image,
  InputDiv
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [registerTitle, setRegisterTitle] = useState("");
  const [registerExperience, setRegisterExperience] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorNames, setErrorNames] = useState("");
  const [users, setUsers] = useState([]);

  const [disableRegisterButton, setDisableRegisterButton] = useState(true);

  useEffect(() => {
    const shouldDisableRegisterButton =
      registerMail.length === 0 ||
      registerPassword.length === 0 ||
      registerName.length === 0 ||
      registerLastName.length === 0 ||
      registerTitle.length === 0 ||
      registerExperience.length === 0;

    setDisableRegisterButton(shouldDisableRegisterButton);
  }, [
    registerExperience.length,
    registerLastName.length,
    registerMail,
    registerName.length,
    registerPassword,
    registerTitle.length
  ]);

  const checkMail = (cadena) => {
    if (!cadena.includes("@") && cadena.lenght > 0)
      setErrorMail("El mail debe tener por lo menos un @.");
    else setErrorMail("");

    setRegisterMail(cadena);
  };

  const checkNames = (cadena, type) => {
    if (cadena.lenght === 0) {
      setErrorNames("No se puede ingresar una cadena vacia en ningun nombre.");
      return;
    }

    if (type === "first") setRegisterName(cadena);
    else setRegisterLastName(cadena);
  };

  const checkPass = (cadena) => {
    if (cadena.lenght > 0 && (cadena.lenght <= 8 || cadena.lenght >= 16))
      setErrorPass("La contraseña debe tener entre 8 y 16 caracterees.");
    else setErrorPass("");

    setRegisterPassword(cadena);
  };

  const fetchUsers = async () => {
    const response = await fetch("mocks/users.json");
    const { users } = await response.json();

    setUsers(users);
  };

  const tryRegister = () => {
    var userAux = users.find((u) => u.email === registerMail);

    if (userAux !== undefined && userAux !== null) {
      setErrorMail("El mail que ingreso ya esta registrado.");
      return;
    }

    if (!registerMail.includes("@")) {
      setErrorMail("El mail no cuenta con el formato adecuado.");
      return;
    }

    if (registerPassword.length < 8) {
      setErrorPass("La contraseña es muy corta.");
      return;
    }

    if (registerTitle.length === 0) {
      setErrorPass("Ingrese su título como tutor.");
      return;
    }

    if (registerExperience.length === 0) {
      setErrorPass("Ingrese una breve experiencia como tutor.");
      return;
    }

    var newUser = {
      email: registerMail,
      password: registerPassword,
      name: registerName,
      lastname: registerLastName,
      title: registerTitle,
      experience: registerExperience
    };

    window.sessionStorage.setItem("loggedUser", JSON.stringify(newUser));

    console.log(newUser);

    navigate(`/`);
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DivRegister>
      <FormRegister>
        <DivImage>
          <Image src={IconImage}></Image>
        </DivImage>
        <DivInputs>
          <InputDiv>
            <Input
              labelText="Nombre"
              placeholder="Ingrese su nombre"
              onChangeHandler={(e) => {
                checkNames(e.target.value, "first");
              }}
            />
          </InputDiv>
          <InputDiv>
            <Input
              labelText="Apellido"
              placeholder="Ingrese su apellido"
              onChangeHandler={(e) => {
                checkNames(e.target.value, "last");
              }}
            />
          </InputDiv>
          <InputDiv>
            <Input
              labelText="Email"
              placeholder="Ingrese su email"
              onChangeHandler={(e) => {
                checkMail(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <Input
              labelText="Contraseña"
              placeholder="Ingrese su contraseña"
              onChangeHandler={(e) => {
                checkPass(e.target.value);
              }}
              type="password"
            />
          </InputDiv>
          <InputDiv>
            <Input
              labelText="Titulo"
              placeholder="Ingrese su título como tutor"
              onChangeHandler={(e) => {
                setRegisterTitle(e.target.value);
              }}
            />
          </InputDiv>
          <InputDiv>
            <label htmlFor="registro-experiencia">Experiencia</label>
            <Experiencia
              id="registro-experiencia"
              placeholder="Ingrese brevemente su experiencia"
              onChange={(e) => {
                setRegisterExperience(e.target.value);
              }}
            />
          </InputDiv>
        </DivInputs>
        <PrimaryButton isDisabled={disableRegisterButton} onClick={tryRegister}>
          Register
        </PrimaryButton>
        {(errorMail !== "" || errorPass !== "") && (
          <ErrorShow>
            {errorMail + " " + errorPass + " " + errorNames}
          </ErrorShow>
        )}
      </FormRegister>
    </DivRegister>
  );
};

export default Register;
