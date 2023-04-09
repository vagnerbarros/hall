import { NextFunction, Request, Response } from "express";
import Exception from "../../util/exception.util";
import { TokenExpiredError } from "jsonwebtoken";
import { verificarTokenAcesso } from "../../util/jwt.util";

export default function verificarAutenticacao(
  request: Request,
  response: Response,
  next: NextFunction
) {
  let tokenAcesso = request.headers.authorization as string;
  if (!tokenAcesso?.startsWith("Bearer ")) {
    throw new Exception("Não autorizado", 403);
  }
  tokenAcesso = tokenAcesso.split(" ")[1];

  try {
    const payload = verificarTokenAcesso(tokenAcesso);
    response.locals.payload = payload;
    next();
  } catch (erro) {
    if (erro instanceof TokenExpiredError) {
      response.status(401).json({ expirado: true, invalido: false });
    } else {
      response.status(403).json({ expirado: false, invalido: true });
    }
  }
}
