import { useContext, useMemo, useState } from "react";
import Input from "components/Input";
import axios from "axios";
import UserContext from "user-context";
import IconImage from "../../assets/icons/UserSampleIcon.png";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "components/PrimaryButton";
import {
  ImageContainer,
  TextFieldsContainer,
  Wrapper,
  ErrorShow,
  FormRegister,
  Image,
  TextFieldContainer,
  Experiencia
} from "./styles";

const Register = () => {
  const navigate = useNavigate();
  const [registerMail, setRegisterMail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registerTitle, setRegisterTitle] = useState("");
  const [registerExperience, setRegisterExperience] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [errorRegisterTitle, setErrorRegisterTitle] = useState("");
  const [errorRegisterExperience, setErrorRegisterExperience] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [errorNames, setErrorNames] = useState({
    firstNameError: "",
    lastNameError: ""
  });

  const [, setLoggedUser] = useContext(UserContext);

  const disableRegisterButton = useMemo(
    () =>
      registerMail.length === 0 ||
      registerPassword.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      registerTitle.length === 0 ||
      registerExperience.length === 0,
    [
      lastName.length,
      registerMail,
      firstName.length,
      registerPassword,
      registerTitle.length,
      registerExperience.length
    ]
  );

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
    // Verificamos si los nombres son válidos
    setErrorNames((prev) => ({
      ...prev,
      [type === "first" ? "firstNameError" : "lastNameError"]:
        name.length === 0 ? "El nombre es obligatorio." : ""
    }));

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

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/mentors/login",
        {
          email: registerMail,
          password: registerPassword
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );

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
          workExperience: response.data.loginmentor.Mentor.workExperience,
          isUserLoggedIn: true,
          token: response.data.loginmentor.token,
          profilePhoto: response.data.loginmentor.Mentor.profilePhoto
        });
        navigate("/");
      }
    } catch (e) {
      setErrorEmail(e.message);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();

    if (!registerMail.includes("@")) {
      setErrorEmail("El mail no cuenta con el formato adecuado.");
      return;
    }

    if (registerPassword.length < 8) {
      setPasswordErrorMessage("La contraseña es muy corta.");
      return;
    }

    if (registerTitle.length === 0) {
      setErrorRegisterTitle("Ingrese su título como tutor.");
      return;
    }

    if (registerExperience.length === 0) {
      setErrorRegisterExperience("Ingrese una breve experiencia como tutor.");
      return;
    }

    const formData = new FormData();
    formData.append("name", firstName);
    formData.append("lastName", lastName);
    formData.append("email", registerMail);
    formData.append("password", registerPassword);
    formData.append("title", registerTitle);
    formData.append("workExperience", registerExperience);
    formData.append("profilePhoto", profilePicture);

    try {
      axios
        .post("http://localhost:4000/api/mentors/registration", formData, {
          headers: {
            Accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then((r) => {
          handleLogin();
          navigate(`/`);
        });
    } catch (e) {}
  };

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
            <ErrorShow>{errorRegisterTitle}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <label htmlFor="registro-experiencia">Experiencia</label>
            <Experiencia
              id="registro-experiencia"
              placeholder="Ingrese brevemente su experiencia"
              value={registerExperience}
              onChange={(e) => {
                setRegisterExperience(e.target.value);
              }}
            />
            <ErrorShow>{errorRegisterExperience}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <label htmlFor="registro-experiencia">Foto de perfil</label>
            <input
              type="file"
              id="upload-image-input"
              name="profile_pic"
              accept=".jpg, .jpeg, .png"
              encType="multipart/form-data"
              onChange={(e) => {
                setProfilePicture(e.target.files[0]);
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
