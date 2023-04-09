import { Request, Response, Router } from "express";

export default class ApiStatus {
  constructor() {}

  routes(): Router {
    const router: Router = Router();

    router.get("", async (req: Request, res: Response) => {
      res.send({ status: "ok" });
    });

    return router;
  }
}
