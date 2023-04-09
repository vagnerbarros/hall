import { verify, sign, decode, SignOptions } from "jsonwebtoken";

export const gerarTokenAcesso = (payload: any): string => {
  const options: SignOptions = {
    algorithm: "HS256",
    expiresIn: process.env.JWT_EXPIRATION,
  };
  return sign(payload, process.env.JWT_SECRET, options);
};

export const verificarTokenAcesso = (token: string) => {
  return verify(token, process.env.JWT_SECRET);
};

export const decodificarToken = (token: string) => {
  return decode(token);
};
