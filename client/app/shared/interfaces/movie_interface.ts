import { IReview } from "./review_inerface";

export interface IMovie {
  id: number;
  name: string;
  rating: number;
  poster: string;
  views: number;
  reviews?: IReview[];
  fees: number;
  duration?: number;
}
