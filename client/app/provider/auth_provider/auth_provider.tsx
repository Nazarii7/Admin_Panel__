import { createContext, FC, PropsWithChildren, useState } from "react";
import { IContext, TypeUserSate } from "./auth_interface";

export const AuthContext = createContext({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<TypeUserSate>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
