import http from "http";
import * as config from "./config.js";
import app from "./app.js";

const server = http.createServer(app);
server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
