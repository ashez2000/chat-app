import { Router } from "express";
import * as auth from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", auth.signUp);
router.post("/signin", auth.signIn);

export default router;
