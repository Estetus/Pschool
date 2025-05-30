import { createContext, useState, type ReactNode } from "react";
import type { UserProps } from "../components/Login/Login.props";

interface UserContextProp {
    children: ReactNode
}

interface UserContextType {
    loggedUser: UserProps | null,
    setLoggedUser: (user: UserProps | null) => void;
}

export const UserContext = createContext<UserContextType>({
  loggedUser: null,
  setLoggedUser: ()=> {}
});

export const UserContextProvider = ({ children }:UserContextProp) => {
  const [loggedUser, setLoggedUser] = useState<UserProps | null>(null);

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
