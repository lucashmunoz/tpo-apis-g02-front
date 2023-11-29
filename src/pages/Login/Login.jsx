import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
  const [errorEmail, setErrorEmail] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [disableLoginButton, setDisableLoginButton] = useState(true);

  useEffect(() => {
    const disableLoginButton =
      loginEmail.length === 0 ||
      loginPassword.length === 0 ||
      errorEmail ||
      passwordErrorMessage;
    setDisableLoginButton(disableLoginButton);
  }, [loginEmail, loginPassword, errorEmail, passwordErrorMessage]);

  const [userLogged, setLoggedUser] = useContext(UserContext);

  const validateEmail = (email) => {
    const emailRegex = new RegExp(/^([A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4})$/i);

    if (!emailRegex.test(email)) {
      setErrorEmail("El email debe seguir el formato email@ejemplo.com");
    } else {
      setErrorEmail("");
    }

    setLoginEmail(email);
  };

  const validatePassword = (clave) => {
    if (clave.length < 8 || clave.length > 16)
      setPasswordErrorMessage(
        "La contraseña debe tener entre 8 y 16 caracteres."
      );
    else {
      setPasswordErrorMessage("");
    }

    setLoginPassword(clave);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.post(
        "http://localhost:4000/api/mentors/login",
        {
          email: loginEmail,
          password: loginPassword
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

      console.log(response.data.loginmentor);
      if (response.status === 200) {
        window.sessionStorage.setItem(
          "loggedUser",
          JSON.stringify(response.data.loginmentor)
        );

        setLoggedUser({
          _id: response.data.loginmentor.Mentor._id,
          password: response.data.loginmentor.Mentor.password,
          name: response.data.loginmentor.Mentor.name,
          email: response.data.loginmentor.Mentor.email,
          lastName: response.data.loginmentor.Mentor.lastName,
          title: response.data.loginmentor.Mentor.title,
          isUserLoggedIn: true,
          token: response.data.loginmentor.token,
          profilePhoto: response.data.loginmentor.Mentor.profilePhoto
        });
        console.log(userLogged);
        navigate(`/`);
      }
    } catch (e) {
      console.log(e);
      setErrorEmail(e.message);
    }
  };

  const handleRecuperarClave = async () => {
    let response;
    try {
      response = await axios.post(
        "http://localhost:4000/api/mentors/forgottenpass",
        {
          mail: loginEmail
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    } catch (e) {
      console.log(e);
      setErrorEmail(e.message);
    }
    console.log(response);

    setErrorEmail("Se envio un mail para recuperar la cuenta.");
  };

  return (
    <Wrapper>
      <FormLogin>
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
          <ErrorShow>{errorEmail}</ErrorShow>
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
          <ErrorShow>{passwordErrorMessage}</ErrorShow>
        </ActionContainer>
        <ActionContainer>
          <TextButton type="button" onClick={handleRecuperarClave}>
            Recuperar contraseña
          </TextButton>
        </ActionContainer>
        <ActionContainer>
          <PrimaryButton
            buttonType="primary"
            type="submit"
            isDisabled={disableLoginButton}
            onClick={handleLogin}
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
