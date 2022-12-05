import { Router } from "express";
import * as auth from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", auth.signUp);
router.post("/signin", auth.signIn);
router.get("/user", auth.authenticate, auth.user);

export default router;
