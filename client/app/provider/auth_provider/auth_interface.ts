import { IUser } from "@/shared/interfaces/user_interface";
import { Dispatch, SetStateAction } from "react";

export type TypeUserSate = IUser | null;

export interface IContext {
  user: TypeUserSate;
  setUser: Dispatch<SetStateAction<TypeUserSate>>;
}
