import "express-async-errors";
import express from "express";
import cors from "cors";
import ApiRoutes from "./api/routes/api.routes";
import handleError from "./api/middlewares/handle-error.middlewares";

const server = express();

server.use(express.json());
server.use(cors());

const apiRoutes = new ApiRoutes();

server.use("/api", apiRoutes.routes());
server.use(handleError);

export default server;
