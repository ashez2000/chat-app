import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import argon from "argon2";
import * as config from "../config.js";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hashedPassword = await argon.hash(this.password);
  this.password = hashedPassword;
  next();
});

// Compare password
UserSchema.methods.comparePassword = async function (password) {
  return await argon.verify(this.password, password);
};

// Generate JWT
UserSchema.methods.generateAuthToken = function () {
  const payload = { id: this._id };
  const options = { expiresIn: config.JWT_EXPIRE };
  return jwt.sign(payload, config.JWT_EXPIRE, options);
};

const User = model("User", UserSchema);

export default User;
