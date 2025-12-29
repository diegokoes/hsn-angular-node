import mongoose, { Schema } from "mongoose";
import { ClientAccount } from "../interfaces/client";

const ParticularSchema = new Schema<ClientAccount>({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  accountActivated: { type: Boolean, default: false },
  imageAvatar: { type: String, default: "" },
  orders: { type: [Schema.Types.Mixed], default: [] },
  wishlist: { type: [Schema.Types.Mixed], default: [] },
  directions: { type: [Schema.Types.Mixed], default: [] },
  paymentMethods: { type: [Schema.Types.Mixed], default: [] },
  accountCreationDate: { type: Date, default: () => new Date() },
  tipo: { type: String, enum: ["empresa", "particular"], required: true },
});

export const ParticularModel = mongoose.model<ClientAccount>("Particular", ParticularSchema, "particulares");
