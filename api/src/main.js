import http from "http";
import mongoose from "mongoose";
import * as config from "./config.js";
import app from "./app.js";

mongoose.connect(config.MONGO_URI).then((conn) => {
  console.log(`MongoDB Connected: ${conn.connection.host}`);
});

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
