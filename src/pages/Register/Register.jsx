import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";

const DivRegister = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const FormRegister = styled.div`
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

const InputDiv = styled.div`
  margin-bottom: 10px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [errorNames, setErrorNames] = useState("");
  const [users, setUsers] = useState([]);

  const checkMail = (cadena) => {
    if (!cadena.includes("@") && cadena.lenght > 0)
      setErrorMail("El mail debe tener por lo menos un @.");
    else setErrorMail("");

    setRegisterMail(cadena);
  };

  const checkNames = (cadena, type) => {
    if (cadena.lenght == 0) {
      setErrorNames("No se puede ingresar una cadena vacia en ningun nombre.");
      return;
    }

    if (type == "first") setRegisterName(cadena);
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
    var userAux = users.find((u) => u.email == registerMail);

    if (userAux != undefined && userAux != null) {
      setErrorMail("El mail que ingreso ya esta registrado.");
      return;
    }

    if (registerPassword.length < 8) {
      setErrorPass("La contraseña es muy corta.");
      return;
    }

    var newUser = {
      email: registerMail,
      password: registerPassword,
      name: registerName,
      lastname: registerLastName
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
        </DivInputs>
        <Button buttonType="primary" onClick={tryRegister}>
          Register
        </Button>
        {errorMail != "" || errorPass != "" ? (
          <ErrorShow>
            {errorMail + " " + errorPass + " " + errorNames}
          </ErrorShow>
        ) : (
          <ErrorHide />
        )}
      </FormRegister>
    </DivRegister>
  );
};

export default Register;
