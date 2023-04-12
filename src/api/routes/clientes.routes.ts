import { Request, Response, Router } from "express";
import { clientes } from "../../mocks/clientes.mock";
import { Cliente } from "../../domain/model/clientes";

export default class ApiClientes {
  private clientes: Cliente[];
  constructor() {
    this.clientes = [];
  }

  routes(): Router {
    const router: Router = Router();

    router.get("", async (req: Request, res: Response) => {
      res.send({ clientes: this.clientes });
    });

    router.post("", (req: Request, res: Response) => {
      const novoCliente = req.body as Cliente;
      novoCliente.id = this.clientes.length + 1;
      this.clientes.push(novoCliente);
      res.send({ ...novoCliente });
    });

    return router;
  }
}
