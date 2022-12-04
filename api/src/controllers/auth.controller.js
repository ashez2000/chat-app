import User from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  const u = await User.findOne({ email });
  if (u) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({ name, email, password });
  const token = user.generateAuthToken();
  user.password = undefined;

  return res.status(201).json({ user, token });
};

export const signIn = async (req, res, next) => {};
