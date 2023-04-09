import { Request, Response, Router } from "express";
import { gerarTokenAcesso } from "../../util/jwt.util";

export default class ApiAutenticacao {
  constructor() {}

  routes(): Router {
    const router: Router = Router();

    router.post("", async (req: Request, res: Response) => {
      const dadosAuth = req.body;
      if (dadosAuth?.usuario === "vagner" && dadosAuth?.senha === "hall1234") {
        const token = gerarTokenAcesso({});
        return res.send({ token });
      }
      return res.status(400).send({ erro: "Usuário/senha inválidos" });
    });

    return router;
  }
}
