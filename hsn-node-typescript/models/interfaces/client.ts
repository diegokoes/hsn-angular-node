import { Types } from "mongoose";

export type ClientType = "empresa" | "particular";

export interface RegistrationPayload {
  email: string;
  password: string;
  // Allow extra dynamic fields coming from frontend
  [key: string]: any;
}

export interface ClientAccount {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  accountActivated: boolean;
  imageAvatar: string;
  orders: any[];
  wishlist: any[];
  directions: any[];
  paymentMethods: any[];
  accountCreationDate: Date | number;
  tipo: ClientType;
}
