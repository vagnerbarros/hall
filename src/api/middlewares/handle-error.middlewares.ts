import { NextFunction, Request, Response } from "express";
import Exception from "../../util/exception.util";

export default function globalHandleError(
  err: Error | Exception,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (process.env.NODE_ENV === "Development") {
    console.log("LOG:", err);
  }
  if (err instanceof Exception) {
    return response.status(err.codigo).json({
      codigo: err.codigo,
      mensagem: err.mensagem,
    });
  }
  return response.status(500).json({
    codigo: 500,
    mensagem: err.message || "Internal server errors",
  });
}
