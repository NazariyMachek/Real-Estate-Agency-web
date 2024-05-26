import { Review } from "./review";
import { User } from "./user";

export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    square: number;
    offertype: number;
    buytype: number;
    userid: number;
}