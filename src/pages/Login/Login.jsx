import { useContext, useEffect, useState } from "react";
import UserContext from "user-context";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import TextButton from "components/Button";
import {
  ActionContainer,
  ButtonRegistrarseContainer,
  DivImage,
  ErrorShow,
  FormLogin,
  Image,
  LogInButton,
  LoginInput,
  RegistrarseContainer,
  RegistrarseLabel,
  Wrapper
} from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [users, setUsers] = useState([]);

  const [disableLoginButton, setDisableLoginButton] = useState(true);

  useEffect(() => {
    const disableLoginButton =
      loginMail.length === 0 || loginPassword.length === 0;
    setDisableLoginButton(disableLoginButton);
  }, [loginMail, loginPassword]);

  const [, setLoggedUser] = useContext(UserContext);

  const checkMail = (cadena) => {
    if (!cadena.includes("@") && cadena.lenght > 0)
      setErrorMail("El mail debe tener por lo menos un @.");
    else setErrorMail("");

    setLoginMail(cadena);
  };

  const checkPass = (cadena) => {
    if (cadena.lenght > 0 && (cadena.lenght < 8 || cadena.lenght > 16))
      setErrorPass("La contraseña debe tener entre 8 y 16 caracterees.");
    else setErrorPass("");

    setLoginPassword(cadena);
  };

  const fetchUsers = async () => {
    const response = await fetch("mocks/users.json");
    const { users } = await response.json();

    setUsers(users);
  };

  const tryLogin = (e) => {
    e.preventDefault();

    const userAux = users.find((u) => u.email === loginMail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    if (userAux.password !== loginPassword) {
      setErrorPass("Contraseña invalida");
      return;
    }

    window.sessionStorage.setItem("loggedUser", JSON.stringify(userAux));

    setLoggedUser({ ...userAux, isUserLoggedIn: true });

    navigate(`/`);
  };

  const newPass = () => {
    var userAux = users.find((u) => u.email === loginMail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    console.log("Se envio un mail para recuperar la cuenta.");
    setErrorMail("Se envio un mail para recuperar la cuenta.");
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Wrapper>
      <FormLogin onSubmit={tryLogin}>
        <DivImage>
          <Image src={IconImage}></Image>
        </DivImage>

        <ActionContainer>
          <LoginInput
            name="email"
            labelText="Email"
            placeholder="Ingrese su email"
            onChangeHandler={(e) => {
              checkMail(e.target.value);
            }}
          />
        </ActionContainer>
        <ActionContainer>
          <LoginInput
            name="password"
            labelText="Contraseña"
            placeholder="Ingrese su contraseña"
            onChangeHandler={(e) => {
              checkPass(e.target.value);
            }}
            type="password"
          />
        </ActionContainer>
        <ActionContainer>
          <LogInButton
            buttonType="primary"
            type="submit"
            isDisabled={disableLoginButton}
          >
            Log In
          </LogInButton>
        </ActionContainer>
        <ActionContainer>
          <TextButton onClick={newPass}>Recuperar contraseña.</TextButton>
        </ActionContainer>
        {(errorMail !== "" || errorPass !== "") && (
          <ErrorShow>{errorMail + " " + errorPass}</ErrorShow>
        )}

        <RegistrarseContainer>
          <ButtonRegistrarseContainer>
            <RegistrarseLabel>¿No tienes cuenta?</RegistrarseLabel>
            <LogInButton
              buttonType="primary"
              onClick={() => navigate("/register")}
            >
              Regístrate
            </LogInButton>
          </ButtonRegistrarseContainer>
        </RegistrarseContainer>
      </FormLogin>
    </Wrapper>
  );
};

export default Login;
