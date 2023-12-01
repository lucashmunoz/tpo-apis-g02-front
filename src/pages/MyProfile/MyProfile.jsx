import { useContext, useEffect, useState } from "react";
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
  FormUpdate,
  Image,
  TextFieldContainer
} from "./styles";

const MyProfile = () => {
  const navigate = useNavigate();
  const [actualData, setActualData] = useState({});
  const [loggedUser] = useContext(UserContext);
  const [UpdatePassword, setUpdatePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [errorNames, setErrorNames] = useState({
    firstNameError: "",
    lastNameError: ""
  });
  const [disableRegisterButton, setDisableRegisterButton] = useState(true);

  useEffect(() => {
    const shouldDisableRegisterButton =
      UpdatePassword.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0;

    setDisableRegisterButton(shouldDisableRegisterButton);
  }, [lastName.length, firstName.length, UpdatePassword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mentorResponse = await axios.get(
          `http://localhost:4000/api/mentors/getmydata/${loggedUser._id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "x-access-token": loggedUser.token
            }
          }
        );
        console.log(mentorResponse.data.mentor);
        console.log(mentorResponse.data.status);
        if (mentorResponse.data.status === 200 && mentorResponse.data.mentor) {
          setActualData(mentorResponse.data.mentor);
          setFirstName(mentorResponse.data.mentor.name);
          setLastName(mentorResponse.data.mentor.lastName);
          setProfilePicture(mentorResponse.data.mentor.profilePhoto);
          console.log(actualData);
        }
      } catch (e) {}
    };
    fetchData();
  }, []);

  const validatePassword = (clave) => {
    if (clave.length < 8 || clave.length > 16)
      setPasswordErrorMessage(
        "La contraseña debe tener entre 8 y 16 caracterees."
      );
    else {
      setPasswordErrorMessage("");
    }

    setUpdatePassword(clave);
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

  const updateMentor = async (e) => {
    e.preventDefault();

    if (UpdatePassword.length < 8) {
      setPasswordErrorMessage("La contraseña es muy corta.");
      return;
    }

    const formData = new FormData();
    formData.append("_id", loggedUser._id);
    if (firstName) formData.append("name", firstName);
    if (lastName) formData.append("lastName", lastName);
    if (UpdatePassword) formData.append("password", UpdatePassword);
    if (profilePicture) formData.append("profilePhoto", profilePicture);

    try {
      axios
        .post("http://localhost:4000/api/mentors/update", formData, {
          headers: {
            Accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": loggedUser.token
          }
        })
        .then((r) => {
          navigate(`/`);
        });
    } catch (e) {}
  };

  return (
    <Wrapper>
      <FormUpdate onSubmit={updateMentor}>
        <ImageContainer>
          <Image src={actualData.profilePhoto}></Image>
        </ImageContainer>
        <TextFieldsContainer>
          <TextFieldContainer>
            <Input
              labelText="Nombre"
              placeholder="Ingrese su nombre"
              value={firstName}
              onChangeHandler={(e) => {
                validateName(e.target.value, "first");
              }}
            />
            <ErrorShow>{errorNames.firstNameError}</ErrorShow>
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Apellido"
              value={lastName}
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
              value={actualData.email}
              disabled
            />
          </TextFieldContainer>
          <TextFieldContainer>
            <Input
              labelText="Contraseña"
              placeholder="Ingrese su nueva contraseña"
              onChangeHandler={(e) => {
                validatePassword(e.target.value);
              }}
              type="password"
            />
            <ErrorShow>{passwordErrorMessage}</ErrorShow>
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
          Actualizar
        </PrimaryButton>
      </FormUpdate>
    </Wrapper>
  );
};

export default MyProfile;
