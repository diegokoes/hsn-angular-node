import mongoose from "mongoose";

//! IMPORTANT TO REMEMBER THAT WHAT'S INSIDE ARE
//! MONGOOSE TYPES, NO TYPESCRIPT TYPES
const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
});
