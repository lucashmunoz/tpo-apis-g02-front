import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import UserContext from "user-context";
import Input from "components/atoms/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/atoms/PrimaryButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FormLogin = styled.form`
  background-color: #f3f4f6;
  display: flex;
  width: 40%;
  padding: 20px 60px;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 10px;
    width: calc(100% - 20px);
  }
`;

const DivImage = styled.div`
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
  margin-top: 30px;
`;

const Image = styled.img`
  width: 120px;
  border: 2px solid black;
  border-radius: 150px;
  background-color: white;
`;

const LoginInput = styled(Input)`
  margin-top
`;

const ActionContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const LogInButton = styled(PrimaryButton)`
  width: 100%;
`;

const ResetPasswordButton = styled.button`
  margin-top: 10px;
  width: 100%;
`;

const RegistrarseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

const RegistrarseLabel = styled.label`
  width: 500px;

  @media (max-width: 768px) {
    width: auto;
  }
`;

const ButtonRegistrarseContainer = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  height: 40px;
`;

const ErrorShow = styled.p`
  color: red;
  display: block;
`;

const Login = () => {
  const navigate = useNavigate();
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [users, setUsers] = useState([]);

  const [loggedUser, setLoggedUser] = useContext(UserContext);

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
          <LogInButton buttonType="primary" type="submit">
            Log In
          </LogInButton>
        </ActionContainer>
        <ActionContainer>
          <ResetPasswordButton buttonType="third" onClick={newPass}>
            Recuperar contraseña.
          </ResetPasswordButton>
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
