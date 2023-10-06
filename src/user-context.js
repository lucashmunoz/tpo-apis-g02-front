import { createContext } from "react";

const UserContext = createContext(null);

export const initialUserContextState = {
  name: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  workExperience: [],
  isUserLoggedIn: false
};

export default UserContext;
