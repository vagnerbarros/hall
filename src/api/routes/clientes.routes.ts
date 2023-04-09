import { Request, Response, Router } from "express";
import { clientes } from "../../mocks/clientes.mock";

export default class ApiClientes {
  constructor() {}

  routes(): Router {
    const router: Router = Router();

    router.get("", async (req: Request, res: Response) => {
      res.send({ clientes });
    });

    return router;
  }
}
