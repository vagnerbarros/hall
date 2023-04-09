import { Router } from "express";
import ApiStatus from "./status.routes";
import ApiClientes from "./clientes.routes";
import verificarAutenticacao from "../middlewares/handle-autenticacao";
import ApiAutenticacao from "./autenticacao.routes";

export default class ApiRoutes {
  private apiStatus: ApiStatus;
  private apiClientes: ApiClientes;
  private apiAutenticacao: ApiAutenticacao;

  constructor() {
    this.apiStatus = new ApiStatus();
    this.apiClientes = new ApiClientes();
    this.apiAutenticacao = new ApiAutenticacao();
  }

  routes(): Router {
    const apiRoutes = Router();

    apiRoutes.use("/status", this.apiStatus.routes());
    apiRoutes.use(
      "/clientes",
      verificarAutenticacao,
      this.apiClientes.routes()
    );
    apiRoutes.use("/auth", this.apiAutenticacao.routes());

    return apiRoutes;
  }
}
