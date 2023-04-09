import server from "./server";
import dotenv from "dotenv";
dotenv.config();

const PORTA = process.env.PORT || 8080;

server.listen(PORTA, () =>
  console.log(
    `Servidor Iniciado na parta ${PORTA}, modo: ${process.env.NODE_ENV}`
  )
);
