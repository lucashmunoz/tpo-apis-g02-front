import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";

const DivRegister = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FormRegister = styled.div`
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

const DivInputs = styled.div`
  margin-bottom: 20px;
`;

const DivImage = styled.div`
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  display: flex;
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

const InputDiv = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Experiencia = styled.textarea`
  height: 150px;
  margin-top: 8px;
`;

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
              onChangeHandler={(e) => {
                setRegisterExperience(e.target.value);
              }}
            />
          </InputDiv>
        </DivInputs>
        <Button buttonType="primary" onClick={tryRegister}>
          Register
        </Button>
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
