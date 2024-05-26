import { Offer } from "./offer";
import { Review } from "./review";

export interface User {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    telephone: string;
    email: string;
    login: string;
    password: string;
    role: number;
}