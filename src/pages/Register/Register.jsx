import { useEffect, useState } from "react";
import Input from "components/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/PrimaryButton";
import {
  ImageContainer,
  TextFieldsContainer,
  Wrapper,
  ErrorShow,
  Experiencia,
  FormRegister,
  Image,
  TextFieldContainer
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerTitle, setRegisterTitle] = useState("");
  const [registerExperience, setRegisterExperience] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [errorNames, setErrorNames] = useState({
    firstNameError: "",
    lastNameError: ""
  });
  const [users, setUsers] = useState([]);

  const [disableRegisterButton, setDisableRegisterButton] = useState(true);

  useEffect(() => {
    const shouldDisableRegisterButton =
      registerMail.length === 0 ||
      registerPassword.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      registerTitle.length === 0 ||
      registerExperience.length === 0;

    setDisableRegisterButton(shouldDisableRegisterButton);
  }, [
    registerExperience.length,
    lastName.length,
    registerMail,
    firstName.length,
    registerPassword,
    registerTitle.length
  ]);

  const validateEmail = (email) => {
    const emailRegex = new RegExp(/^([A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4})$/i);

    if (!emailRegex.test(email)) {
      setErrorEmail("El email debe seguir el formato email@ejemplo.com");
    } else {
      setErrorEmail("");
    }

    setRegisterMail(email);
  };

  const validateName = (name, type) => {
    console.log(name.length);
    // Verificamos si los nombres son válidos
    if (type === "first") {
      setErrorNames((prev) => ({
        ...prev,
        firstNameError: name.length === 0 ? "El nombre es obligatorio." : ""
      }));
    } else {
      setErrorNames((prev) => ({
        ...prev,
        lastNameError: name.length === 0 ? "El nombre es obligatorio." : ""
      }));
    }

    // Nombres válidos
    if (type === "first") {
      setFirstName(name);
    } else {
      setLastName(name);
    }
  };

  const validatePassword = (clave) => {
    if (clave.length < 8 || clave.length > 16)
      setPasswordErrorMessage(
        "La contraseña debe tener entre 8 y 16 caracterees."
      );
    else {
      setPasswordErrorMessage("");
    }

    setRegisterPassword(clave);
  };

  const fetchUsers = async () => {
    const response = await fetch("mocks/users.json");
    const { users } = await response.json();

    setUsers(users);
  };

  const registerUser = () => {
    const userAux = users.find((u) => u.email === registerMail);

    if (userAux !== undefined && userAux !== null) {
      setErrorEmail("El mail que ingreso ya esta registrado.");
      return;
    }

    if (!registerMail.includes("@")) {
      setErrorEmail("El mail no cuenta con el formato adecuado.");
      return;
    }

    if (registerPassword.length < 8) {
      setPasswordErrorMessage("La contraseña es muy corta.");
      return;
    }

    if (registerTitle.length === 0) {
      setPasswordErrorMessage("Ingrese su título como tutor.");
      return;
    }

    if (registerExperience.length === 0) {
      setPasswordErrorMessage("Ingrese una breve experiencia como tutor.");
      return;
    }

    const newUser = {
      email: registerMail,
      password: registerPassword,
      name: firstName,
      lastname: lastName,
      title: registerTitle,
      experience: registerExperience
    };

    window.sessionStorage.setItem("loggedUser", JSON.stringify(newUser));

    navigate(`/`);
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <FormRegister onSubmit={registerUser}>
        <ImageContainer>
          <Image src={IconImage}></Image>
        </ImageContainer>
        <TextFieldsContainer>
          <TextFieldContainer>
            <Input
              labelText="Nombre"
              placeholder="Ingrese su nombre"
              onChangeHandler={(e) => {
                validateName(e.target.value, "first");
              }}
            />
            <ErrorShow>{errorNames.firstNameError}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Apellido"
              placeholder="Ingrese su apellido"
              onChangeHandler={(e) => {
                validateName(e.target.value, "last");
              }}
            />
            <ErrorShow>{errorNames.lastNameError}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Email"
              placeholder="Ingrese su email"
              onChangeHandler={(e) => {
                validateEmail(e.target.value);
              }}
            />
            <ErrorShow>{errorEmail}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Contraseña"
              placeholder="Ingrese su contraseña"
              onChangeHandler={(e) => {
                validatePassword(e.target.value);
              }}
              type="password"
            />
            <ErrorShow>{passwordErrorMessage}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Titulo"
              placeholder="Ingrese su título como tutor"
              onChangeHandler={(e) => {
                setRegisterTitle(e.target.value);
              }}
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <label htmlFor="registro-experiencia">Experiencia</label>
            <Experiencia
              id="registro-experiencia"
              placeholder="Ingrese brevemente su experiencia"
              onChange={(e) => {
                setRegisterExperience(e.target.value);
              }}
            />
          </TextFieldContainer>
        </TextFieldsContainer>
        <PrimaryButton isDisabled={disableRegisterButton} type="submit">
          Register
        </PrimaryButton>
      </FormRegister>
    </Wrapper>
  );
};

export default Register;
