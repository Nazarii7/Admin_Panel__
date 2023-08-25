import { AuthContext } from "provider/auth_provider/auth_provider";
import { useContext } from "react";

export const useAuth = () => useContext(AuthContext);
