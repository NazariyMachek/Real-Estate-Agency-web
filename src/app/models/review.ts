import { Offer } from "./offer";
import { User } from "./user";

export interface Review {
    id: number;
    review: string;
    offerid: number;
    userid: number;
}