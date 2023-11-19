import { useContext, useEffect, useState } from "react";
import UserContext from "user-context";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import TextButton from "components/TextButton";
import {
  ActionContainer,
  ButtonRegistrarseContainer,
  ImgWrapper,
  ErrorShow,
  FormLogin,
  Image,
  RegistrarseContainer,
  RegistrarseLabel,
  Wrapper
} from "./styles";
import Input from "components/Input";
import PrimaryButton from "components/PrimaryButton";

const Login = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const [disableLoginButton, setDisableLoginButton] = useState(true);

  useEffect(() => {
    const disableLoginButton =
      loginEmail.length === 0 ||
      loginPassword.length === 0 ||
      errorMail ||
      passwordErrorMessage;
    setDisableLoginButton(disableLoginButton);
  }, [loginEmail, loginPassword, errorMail, passwordErrorMessage]);

  const [, setLoggedUser] = useContext(UserContext);

  const validateEmail = (email) => {
    const emailRegex = new RegExp(/^([A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4})$/i);

    if (!emailRegex.test(email)) {
      setErrorMail("El email debe seguir el formato email@ejemplo.com");
    } else {
      setErrorMail("");
    }

    setLoginEmail(email);
  };

  const validatePassword = (clave) => {
    console.log(clave.length);
    if (clave.length < 8 || clave.length > 16)
      setPasswordErrorMessage(
        "La contraseña debe tener entre 8 y 16 caracteres."
      );
    else {
      setPasswordErrorMessage("");
    }

    setLoginPassword(clave);
  };

  const fetchUsers = async () => {
    const response = await fetch("mocks/users.json");
    const { users } = await response.json();

    setUsers(users);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userAux = users.find((u) => u.email === loginEmail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    if (userAux.password !== loginPassword) {
      setPasswordErrorMessage("Contraseña invalida");
      return;
    }

    window.sessionStorage.setItem("loggedUser", JSON.stringify(userAux));

    setLoggedUser({ ...userAux, isUserLoggedIn: true });

    navigate(`/`);
  };

  const handleRecuperarClave = () => {
    const userAux = users.find((u) => u.email === loginEmail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    setErrorMail("Se envio un mail para recuperar la cuenta.");
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <FormLogin onSubmit={handleLogin}>
        <ImgWrapper>
          <Image src={IconImage}></Image>
        </ImgWrapper>
        <ActionContainer>
          <Input
            name="email"
            labelText="Email"
            placeholder="Ingrese su email"
            onChangeHandler={(e) => {
              validateEmail(e.target.value);
            }}
          />
          {errorMail !== "" && <ErrorShow>{errorMail}</ErrorShow>}
        </ActionContainer>
        <ActionContainer>
          <Input
            name="password"
            labelText="Contraseña"
            placeholder="Ingrese su contraseña"
            onChangeHandler={(e) => {
              validatePassword(e.target.value);
            }}
            type="password"
          />
          {passwordErrorMessage !== "" && (
            <ErrorShow>{passwordErrorMessage}</ErrorShow>
          )}
        </ActionContainer>
        <ActionContainer>
          <TextButton onClick={handleRecuperarClave}>
            Recuperar contraseña
          </TextButton>
        </ActionContainer>
        <ActionContainer>
          <PrimaryButton
            buttonType="primary"
            type="submit"
            isDisabled={disableLoginButton}
          >
            Log In
          </PrimaryButton>
        </ActionContainer>{" "}
        <RegistrarseContainer>
          <ButtonRegistrarseContainer>
            <RegistrarseLabel>¿No tienes cuenta?</RegistrarseLabel>
            <PrimaryButton
              buttonType="primary"
              onClick={() => navigate("/register")}
            >
              Regístrate
            </PrimaryButton>
          </ButtonRegistrarseContainer>
        </RegistrarseContainer>
      </FormLogin>
    </Wrapper>
  );
};

export default Login;
