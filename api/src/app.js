import express from "express";
import * as error from "./controllers/error.controller.js";
import authRouter from "./routers/auth.router.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("*", error.notFound);
app.use(error.globalError);

export default app;
