import { IMovie } from "./movie_interface";
import { IUser } from "./user_interface";

export interface IReview {
  id: number;
  user: IUser;
  movie: IMovie;
  description: string;
}
