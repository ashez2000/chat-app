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

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid credentails" });
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentails" });
  }

  const token = user.generateAuthToken();
  user.password = undefined;

  return res.status(200).json({ user, token });
};

export const user = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  user.password = undefined;
  return res.status(200).json({ user });
};

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }

  try {
    const decoded = User.verifyToken(req.headers.authorization);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
