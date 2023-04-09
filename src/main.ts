import server from "./server";
import dotenv from "dotenv";
dotenv.config();

server.listen(process.env.PORT, () =>
  console.log(
    `Servidor Iniciado na parta ${process.env.PORT}, modo: ${process.env.NODE_ENV}`
  )
);
