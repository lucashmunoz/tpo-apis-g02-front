import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";

const DivLogin = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const FormLogin = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 5%;
  border-radius: 15px;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const DivInputs = styled.div`
  margin-bottom: 20px;
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

const ErrorShow = styled.a`
  color: red;
  display: block;
`;
const ErrorHide = styled.a`
  color: red;
  display: none;
`;

const Login = () => {
  const navigate = useNavigate();
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [users, setUsers] = useState([]);

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

  const tryLogin = () => {
    var userAux = users.find((u) => u.email === loginMail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    if (userAux.password !== loginPassword) {
      setErrorPass("Contraseña invalida");
      return;
    }

    window.sessionStorage.setItem("loggedUser", JSON.stringify(userAux));

    console.log("Logueado correctamente");
    navigate(`/`);
  };

  const newPass = () => {
    var userAux = users.find((u) => u.email === loginMail);

    if (userAux === undefined || userAux === null) {
      setErrorMail("Mail inexistente");
      return;
    }

    console.log("Se envio un mail para recuperar la cuenta.");
  };

  // Llamamos a fetchServices en el mount del componente
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DivLogin>
      <FormLogin>
        <DivImage>
          <Image src={IconImage}></Image>
        </DivImage>
        <DivInputs>
          <Input
            labelText="Email"
            placeholder="Ingrese su email"
            onChangeHandler={(e) => {
              checkMail(e.target.value);
            }}
          />
          <Input
            labelText="Contraseña"
            placeholder="Ingrese su contraseña"
            onChangeHandler={(e) => {
              checkPass(e.target.value);
            }}
            type="password"
          />
        </DivInputs>
        <Button buttonType="primary" onClick={tryLogin}>
          Log In
        </Button>
        <Button buttonType="third" onClick={newPass}>
          Recuperar contraseña.
        </Button>
        {errorMail !== "" || errorPass !== "" ? (
          <ErrorShow>{errorMail + " " + errorPass}</ErrorShow>
        ) : (
          <ErrorHide />
        )}
      </FormLogin>
    </DivLogin>
  );
};

export default Login;
