import { createContext } from "react";

const UserContext = createContext(null);

export const initialUserContextState = {
  _id: "",
  name: "",
  lastName: "",
  title: "",
  email: "",
  workExperience: "",
  profilePhoto: "",
  isUserLoggedIn: false,
  token: ""
};

export default UserContext;
